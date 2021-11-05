from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'surveys', views.SurveyViewSet, basename='surveys')

router_questions = DefaultRouter()
router_questions.register(r'questions', views.QuestionViewSet, basename='questions')

urlpatterns = [
    path('', include(router.urls)),
    path('surveys/<survey_id>/', include(router_questions.urls)),
    # path('surveys/<survey_id>/questions/',
    #    views.get_questions,
    #    name='get_questions'),
]
