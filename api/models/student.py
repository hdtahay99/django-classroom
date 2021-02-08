"""Student model."""

# Django
from django.db import models

# Models
from api.models import Profile


class Student(models.Model):
    """Student model.

    A student is a type of user, can get any courses of specific degree."""

    student = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE,
        primary_key=True,
        related_name="student"
    )

    contact         = models.CharField('Phone contact',max_length=15, null=True, blank=True)
    address_contact = models.CharField('Address contact', max_length=250, null=True, blank=True)
    is_active = models.BooleanField(
        'Student status',
        default=True,
        help_text=(
            'Verify if a student is active'
        )
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name


    def delete(self, *args):
        self.is_active = False
        self.save()
        return True
