"""Person model."""

# Django
from django.db import models


class Person(models.Model):
    """ A person is any admin, professor or student,
    that can sign in."""

    name         = models.CharField('name', max_length=100)
    last_name    = models.CharField('last name', max_length=100)
    address      = models.CharField('address', max_length=255)
    phone_number = models.CharField('phone number', max_length=8) 
    is_active = models.BooleanField(
        'status person',
        default=True,
        help_text='Verify person is active'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        """Return the person's name"""
        return '%s %s' % (self.name, self.last_name)


    def delete(self, *args):
        self.status = False
        self.save()
        return True

