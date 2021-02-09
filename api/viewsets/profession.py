import json

from django.core.files import File
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.settings import api_settings

from api.models import Profession
from api.serializers import ProfessionSerializer, ProfessionReadSerializer


class ProfessionViewset(viewsets.ModelViewSet):
    queryset = Profession.objects.filter(is_active=True).order_by('-id')

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("id","name")
    search_fields = ("id","name")
    ordering_fields = ("id", "name")


    def get_serializer_class(self):
        """Define serializer for API"""
        if self.action == 'list' or self.action == 'retrieve':
            return ProfessionReadSerializer
        else:
            return ProfessionSerializer


    def get_permissions(self):
        """" Define permisos para este recurso """
        # if self.action == "create" or self.action == "token":
        #     permission_classes = [AllowAny]
        # else:
        #     permission_classes = [IsAuthenticated]
        # return [permission() for permission in permission_classes]
        permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]

    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)