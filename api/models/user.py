"""User model."""

# Django
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """User model.

    Extend from Django's Abstract User. Change the username field
    to email and add others fields."""

    email    = models.EmailField(
        'email address',
        unique=True,
        error_messages={
            'unique' : 'A user with that email already exists.'
        }
    )

    USERNAME_FIELD  = 'email'
    REQUIRED_FIELDS = ['username']

    change_pass = models.BooleanField(
        'change pass',
        default=False,
        help_text = (
            'Helps identify if a user has already changed their password the first time they logged in'
        )
    )
    is_active = models.BooleanField(
        'user status',
        default=True,
         help_text='Verify user is active'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __unicode__(self):
        return self.email


    def delete(self, *args):
        self.is_active = False
        self.save()
        return True



