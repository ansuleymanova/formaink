from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/', include('djoser.urls.authtoken')),
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('users.urls')),
    path('api/v1/', include('surveys.urls')),
]

schema_view = get_schema_view(
    openapi.Info(
        title="forma.ink api",
        default_version='v1',
        description="Документация api для forma.ink",
        # terms_of_service="URL страницы с пользовательским соглашением",
        # contact=openapi.Contact(email="suleymanova.dev@gmail.com"),
        # license=openapi.License(name="BSD License"),
        ),
    public=True,
    permission_classes=(permissions.AllowAny,),
    )

urlpatterns += [
   url(r'^swagger(?P<format>\.json|\.yaml)$',
       schema_view.without_ui(cache_timeout=0), name='schema-json'),
   url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0),
       name='schema-swagger-ui'),
   url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0),
       name='schema-redoc'),
   ]
