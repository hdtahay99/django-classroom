"""Rol serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from api.models import Rol


class RolSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rol
        fields = (
            'id',
            'name',
            'is_active',
        )


class RolReadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rol
        fields = ('__all__')