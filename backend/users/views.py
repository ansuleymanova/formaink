from djoser.views import UserViewSet

from .serializers import CustomUserSerializer


class UserViewSet(UserViewSet):
    serializer_class = CustomUserSerializer
    lookup_field = 'id'