from django.db import models

# Create your models here.
class Band(models.Model):
    name = models.CharField(max_length=128, blank=False, null=False, unique=True )
    date_added = models.DateField(auto_now_add=True)
    image = models.CharField(max_length=255, blank=True, null=True)
    bio = models.TextField(null=True, blank=True)
