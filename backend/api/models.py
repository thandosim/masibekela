from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class NoteImage(models.Model):
    note = models.ForeignKey(Note, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="note_images/")