# Register your models here.

# Django
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Models
from api.models import User, Profile, Rol


class CustomUserAdmin(UserAdmin):
    """User admin."""
    list_display = ('username', 'email', 'change_pass', 'is_active', 'is_superuser')
    list_filter  = ('username', 'email',)


@admin.register(Rol)
class RolAdmin(admin.ModelAdmin):
    """Rol admin"""

    list_display = (
        'name',
        'is_active',
    )

    search_fields = ('name',)
    list_filter = ('name',)


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    """Profile admin"""

    readonly_fields = ['image_tag']
    list_display  = ('user', 'rol', 'name', 'last_name', 'address', 'phone', 'image_tag', 'is_active')
    search_fields = ('user__email', 'user__username', 'rol__name', 'name', 'last_name')
    list_filter   = ('user', 'rol', 'name',)


admin.site.register(User, CustomUserAdmin)