from rest_framework import serializers
from django.db import transaction
from drf_extra_fields.fields import Base64ImageField

from .models import Survey


class SurveyListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Survey
        fields = ['title', 'slug', 'header_image',
                  'description', 'author', 'status']


class SurveyWriteSerializer(serializers.ModelSerializer):
    header_image = Base64ImageField(required=False)

    class Meta:
        model = Survey
        fields = ['title', 'slug', 'header_image',
                  'description']

    @transaction.atomic
    def create(self, validated_data):
        context = self.context['request']
        survey = Survey.objects.create(author=context.user,
                                       **validated_data)
        return survey
