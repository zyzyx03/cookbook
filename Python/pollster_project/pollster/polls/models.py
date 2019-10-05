from django.db import models

# Create your models here.

class Question(models.Model): # This is class refer to Question table in the database
    question_text = models.CharField(max_length=200) # Specify our field
    pub_date = models.DateTimeField('date published')

    def __str__(self): #  
        return self.question_text

class Choice(models.Model): # This is class refer to Choice table in the database
    question = models.ForeignKey(Question,on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text

