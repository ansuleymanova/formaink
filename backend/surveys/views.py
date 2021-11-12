from rest_framework import viewsets, permissions

from . import models, serializers
from .permissions import IsAuthorOrAdmin


class SurveyViewSet(viewsets.ModelViewSet):
    queryset = models.Survey.objects.all()
    http_method_names = ['get', 'post', 'patch', 'delete']
    permission_classes = [IsAuthorOrAdmin]
    pagination_class = None
    lookup_field = 'id'

    def get_queryset(self):
        if self.request.user.is_admin:
            return models.Survey.objects.all()
        else:
            return models.Survey.objects.filter(author=self.request.user)

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return serializers.SurveyWriteSerializer
        return serializers.SurveyListSerializer

    def __str__(self):
        return self.text


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = models.Question.objects.all()
    http_method_names = ['get', 'post', 'patch', 'delete']
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = None
    serializer_class = serializers.QuestionWriteSerializer
    lookup_field = 'id'

    def get_queryset(self):
        if self.request.user.is_admin:
            return models.Question.objects.all()
        else:
            return models.Question.objects.filter(author=self.request.user)

    def __str__(self):
        return self.text


# @api_view(['GET'])
# @permission_classes([permissions.IsAuthenticatedOrReadOnly])
# def get_questions(request, survey_id):
#    survey = get_object_or_404(models.Survey, id=survey_id)
#    questions = survey.questions.all()
#    return Response(serializers.QuestionListSerializer(questions, many=True).data,
#                    status=status.HTTP_200_OK)