"""Users serializaers."""

# Django REST Framework
from rest_framework import serializers

# Models
from api.models import User, Profile, Rol


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = (
            'rol', 
            'name', 
            'last_name', 
            'address', 
            'phone', 
            'picture', 
            'is_active'
        )


class UserSerializer(serializers.ModelSerializer):

    profile = ProfileSerializer(required=False)

    class Meta:
        model = User
        fields = (
            'id',
            'profile',
            'email',
            'username',
            'password',
            'change_pass',
            'is_active',
        )


    # def create(self, validated_data):
    #     """Handle function for create profile."""
    #     profile_data = validated_data.pop('profile')
    #     user      = User.objects.create(**validated_data)
    #     Profile.objects.create(user=user, **profile_data)
    #     return user
        


class UserReadSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'username',
            'profile',
            'change_pass',
            'is_active',
        )
