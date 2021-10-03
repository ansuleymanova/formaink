from rest_framework import viewsets

from . import models, permissions, serializers


class SurveyViewSet(viewsets.ModelViewSet):
    queryset = models.Survey.objects.all()
    http_method_names = ['get', 'post', 'patch', 'delete']
    permission_classes = [permissions.IsAuthorOrAdmin]
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

