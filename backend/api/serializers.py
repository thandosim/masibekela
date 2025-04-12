from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note, NoteImage

class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","username", "password"]
        extra_kwags = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class NoteImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoteImage
        fields = ["id", "image"]

class NoteSerializer(serializers.ModelSerializer):
    images = NoteImageSerializer(many=True, read_only=True)  # Read-only for the nested images

    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author", "images"]
        extra_kwargs = {"author": {"read_only": True}}
