from django.db import transaction
from drf_extra_fields.fields import Base64ImageField
from rest_framework import serializers
from rest_framework.generics import get_object_or_404

from .models import Survey, Question, Option


class SurveyListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Survey
        fields = ['title', 'header_image',
                  'description', 'author', 'status']


class SurveyWriteSerializer(serializers.ModelSerializer):
    header_image = Base64ImageField(required=False)

    class Meta:
        model = Survey
        fields = ['title', 'header_image',
                  'description']

    @transaction.atomic
    def create(self, validated_data):
        context = self.context['request']
        survey = Survey.objects.create(author=context.user,
                                       **validated_data)
        return survey


class OptionListSerializer(serializers.ModelSerializer):
    # picture = Base64ImageField(required=False)

    class Meta:
        model = Option
        fields = ['code', 'text',
                  # 'picture'
                  ]


class QuestionListSerializer(serializers.ModelSerializer):
    options = OptionListSerializer(many=True)

    class Meta:
        model = Question
        fields = ['text', 'survey', 'block',
                  'position', 'picture', 'options']


class QuestionWriteSerializer(serializers.ModelSerializer):
    picture = Base64ImageField(required=False)
    options = OptionListSerializer(many=True)

    class Meta:
        model = Question
        fields = ['text', 'picture', 'options']

    @transaction.atomic
    def create(self, validated_data):
        context = self.context['request']
        question_view = self.context['view']
        options = validated_data.pop('options')
        survey = get_object_or_404(Survey,
                                   id=question_view.kwargs.get('survey_id'))
        print(question_view.kwargs.get('survey_id'))
        question = Question.objects.create(survey=survey,
                                           **validated_data)
        options_req = context.data['options']
        option_list = []
        for option in options_req:
            option_list.append(Option(
                question=question,
                code=option['code'],
                text=option['text'],
                # picture=option['picture'],
            ))
        Option.objects.bulk_create(option_list)
        return question

    def to_representation(self, instance):
        serializer = QuestionListSerializer(instance)
        serializer.context['request'] = self.context['request']
        return serializer.data
