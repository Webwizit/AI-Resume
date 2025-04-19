from django.urls import path
from .views import ResumeUploadView, ResumeParseView

urlpatterns = [
    path('upload/', ResumeUploadView.as_view(), name='resume-upload'),
    path('parse/<int:pk>/', ResumeParseView.as_view(), name='resume-parse'),
]