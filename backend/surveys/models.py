from django.db import models

from users.models import User


class Survey(models.Model):
    CLOSED = 'CL'
    OPEN = 'OP'
    STATUSES = [
        (CLOSED, 'Closed'),
        (OPEN, 'Open'),
    ]
    title = models.CharField(max_length=300)
    slug = models.SlugField(max_length=200,
                            unique=True,
                            )  # to prepopulate: ModelAdmin.prepopulated_fields
    header_image = models.ImageField(upload_to='headers')
    description = models.TextField()
    author = models.ForeignKey(User,
                               on_delete=models.CASCADE,
                               related_name='surveys')
    status = models.CharField(
        max_length=2,
        choices=STATUSES,
        default=CLOSED,
    )

    def is_open(self):
        return self.status == self.OPEN


class Block(models.Model):
    survey = models.ForeignKey(Survey,
                               on_delete=models.CASCADE,
                               )
    picture = models.ImageField(upload_to='blocks')


class Question(models.Model):
    text = models.TextField()
    survey = models.ForeignKey(Survey,
                               related_name='questions',
                               editable=False,
                               on_delete=models.CASCADE,
                               )
    block = models.ForeignKey(Block,
                              on_delete=models.DO_NOTHING)
    position = models.IntegerField()
    picture = models.ImageField(upload_to='questions')


class Option(models.Model):
    question = models.ForeignKey(Question,
                                 related_name='options',
                                 on_delete=models.CASCADE,
                                 )
    text = models.CharField(max_length=2000,
                            blank=True,
                            null=True)
    picture = models.ImageField(upload_to='options')


class Response(models.Model):
    start = models.DateTimeField()
    finish = models.DateTimeField()
    #  ip = models.CharField(max_length=39)
    survey = models.ForeignKey(Survey,
                               on_delete=models.CASCADE)


class Answer(models.Model):
    response = models.ForeignKey(Response,
                                 on_delete=models.CASCADE,
                                 )
    question = models.ForeignKey(Question,
                                 on_delete=models.CASCADE)