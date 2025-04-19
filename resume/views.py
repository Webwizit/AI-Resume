import json
import openai
from django.conf import settings
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from PyPDF2 import PdfReader

from .models import Resume
from .serializers import ResumeSerializer, ResumeUploadSerializer

# Initialize OpenAI
openai.api_key = settings.OPENAI_API_KEY

class ResumeUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        serializer = ResumeUploadSerializer(data=request.data)
        if serializer.is_valid():
            resume = serializer.save()
            return Response({'id': resume.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ResumeParseView(APIView):
    def post(self, request, pk):
        try:
            resume = Resume.objects.get(pk=pk)
        except Resume.DoesNotExist:
            return Response({'error': 'Resume not found.'}, status=status.HTTP_404_NOT_FOUND)

        # Extract text from PDF
        reader = PdfReader(resume.file)
        text = ''
        for page in reader.pages:
            text += page.extract_text() or ''

        # Prepare prompt
        prompt = (
            "Extract the candidate's name, email, phone number, skills, education, and experience "
            f"from the following resume text. Return as JSON with keys: name, email, phone, skills, education, experience.\n\n{text}"
        )

        # Call OpenAI
        response = openai.ChatCompletion.create(
            model='gpt-3.5-turbo',
            messages=[{'role': 'user', 'content': prompt}],
            temperature=0
        )
        content = response.choices[0].message.content.strip()

        # Parse JSON
        try:
            data = json.loads(content)
        except json.JSONDecodeError:
            return Response({'error': 'Failed to parse resume data.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # Update model
        resume.name = data.get('name', '')
        resume.email = data.get('email', '')
        resume.phone = data.get('phone', '')
        resume.skills = data.get('skills', '')
        resume.education = data.get('education', '')
        resume.experience = data.get('experience', '')
        resume.save()

        serializer = ResumeSerializer(resume)
        return Response(serializer.data)