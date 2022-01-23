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
    header_image = models.ImageField(upload_to='headers',
                                     null=True,
                                     blank=True)
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
                               on_delete=models.CASCADE)
    picture = models.ImageField(upload_to='blocks')


class Question(models.Model):
    text = models.TextField()
    survey = models.ForeignKey(Survey,
                               related_name='questions',
                               on_delete=models.CASCADE,
                               )
    block = models.ForeignKey(Block,
                              blank=True,
                              null=True,
                              on_delete=models.DO_NOTHING)
    position = models.IntegerField(blank=True,
                                   null=True)
    picture = models.ImageField(upload_to='questions',
                                blank=True,
                                null=True)


class Option(models.Model):
    question = models.ForeignKey(Question,
                                 related_name='options',
                                 on_delete=models.CASCADE,
                                 )
    text = models.CharField(max_length=2000,
                            blank=True,
                            null=True)
    picture = models.ImageField(upload_to='options',
                                blank=True,
                                null=True)
    code = models.IntegerField()


class Response(models.Model):
    start = models.DateTimeField()
    finish = models.DateTimeField()
    #  ip = models.CharField(max_length=39)
    survey = models.ForeignKey(Survey,
                               on_delete=models.CASCADE)


class Answer(models.Model):
    response = models.ForeignKey(Response,
                                 on_delete=models.CASCADE)
    question = models.ForeignKey(Question,
                                 on_delete=models.CASCADE)


class SingleChoiseAnswer(Answer):
    selected_option = models.ForeignKey(Option,
                                        on_delete=models.CASCADE,
                                        blank=True,
                                        null=True)
