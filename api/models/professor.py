"""Professor model."""

# Django 
from django.db import models

# Models
from api.models import Profile, Profession


class Professor(models.Model):
    """Professor model.

    A professor is an user that can sign in, also can get any courses
    in specific grade of classroom."""

    professor = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE,
        primary_key=True,
        related_name="professor"
    )

    profession = models.ForeignKey(
        Profession, 
        on_delete=models.CASCADE, 
        related_name="profession"
    )

    is_active = models.BooleanField(
        'Professor status',
        default=True,
        help_text=(
            'Verify if a professor is active'
        )
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    
    def __str__(self):
        return self.professor.name


    def delete(self, *args):
        self.is_active = False
        self.save()
        return True
