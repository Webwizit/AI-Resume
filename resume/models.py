from django.db import models

class Resume(models.Model):
    class Meta:
        app_label = 'resume'
    file = models.FileField(upload_to='resumes/')
    name = models.CharField(max_length=255, blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    skills = models.TextField(blank=True)
    education = models.TextField(blank=True)
    experience = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Resume {self.id} - {self.name or 'Unnamed'}"