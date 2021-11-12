from django.contrib import admin

from .models import Option, Survey, Question


class SurveyAdmin(admin.ModelAdmin):
    list_display = ('id', 'title',
                    'author', 'status')
    search_fields = ('title', 'author')
    list_filter = ('status', 'author')
    empty_value_display = '-empty-'


admin.site.register(Survey, SurveyAdmin)


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'survey', 'text')
    search_fields = ('survey', 'text')
    empty_value_display = '-empty-'


admin.site.register(Question, QuestionAdmin)


class OptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'question', 'text', 'code')
    search_fields = ('question', 'text')
    empty_value_display = '-empty-'


admin.site.register(Option, OptionAdmin)
