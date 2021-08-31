from djoser.serializers import UserSerializer

from .models import User


class CustomUserSerializer(UserSerializer):

    class Meta:
        model = User
        fields = ('email', 'id', 'username', 'first_name',
                  'last_name')
        extra_kwargs = {'email': {'required': False},
                        'first_name': {'max_length': 150},
                        'password': {'max_length': 150}}
