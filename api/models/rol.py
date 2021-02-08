"""Rol model."""

# Django
from django.db import models


class Rol(models.Model):
    """A rol is what makes the difference
    between the users of the system."""

    name   = models.CharField('Rol name', max_length=20)
    is_active = models.BooleanField(
        'status rol',
        default=True,
        help_text='Verify rol is active'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name


    def delete(self, *args):
        self.status = False
        self.save()
        return True 