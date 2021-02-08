"""Profile model."""

# Django
from django.db import models

# Models
from api.models import User

# Utils
from django.utils.html import mark_safe


class Profile(models.Model):
    """Profile model.

    A profile contains the personal information of user"""

    user      = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name="profile")
    rol       = models.ForeignKey('api.Rol', on_delete=models.CASCADE, related_name="rol")
    name      = models.CharField(max_length=100, null=False, blank=False)
    last_name = models.CharField(max_length=100, null=False, blank=False) 
    address   = models.CharField(max_length=250, null=True, blank=True)
    phone     = models.CharField(max_length=15, null=True, blank=True)
    picture   = models.ImageField(upload_to='Picture', null=True, blank=True)
    is_active = models.BooleanField(
        'profile status', 
        default=True,
        help_text = (
            'Verify is profile is active'
        )
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name


    def delete(self, *args):
        user = self.user
        user.is_active = False
        user.save()
        self.is_active = False
        self.save()
        return True

    def image_tag(self):
            return mark_safe('<img src="/media/%s" width="150" height="150" />' % (self.picture))

    image_tag.short_description = 'Image Profile'