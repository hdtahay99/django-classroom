"""Profession model."""

# Django
from django.db import models


class Profession(models.Model):
    """Profession model.

    A profession is a professor's degree."""

    name      = models.CharField('Profession', max_length=255, blank=False, null=False)
    is_active = models.BooleanField(
        'profession status',
        default=True,
        help_text=(
            'Verify if a profession is active'
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