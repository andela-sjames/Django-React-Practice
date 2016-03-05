"""Script Used to convert python objects to json objects."""

from rest_framework import serializers
from models import Band

class BandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Band
