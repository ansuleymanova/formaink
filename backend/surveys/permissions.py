from rest_framework import permissions


class IsAuthorOrAdmin(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        if request.method == 'POST':
            return bool(request.user and request.user.is_authenticated)
        return bool(
            request.user and (request.user == obj.author
                              or request.user.is_admin))
