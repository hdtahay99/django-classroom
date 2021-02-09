"""Profession serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from api.models import Profession


class ProfessionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profession
        fields = (
            'id',
            'name',
            'is_active',
        )


class ProfessionReadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profession
        fields = ('__all__')
