# Register your models here.

# Django
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Models
from api.models import User, Profile, Rol, Profession, Professor, Student


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


@admin.register(Profession)
class ProfessionAdmin(admin.ModelAdmin):
    """Profession admin"""

    list_display = (
        'name',
        'is_active',
    )

    search_fields = ('name',)
    list_filter = ('name',)


@admin.register(Professor)
class ProfessorAdmin(admin.ModelAdmin):
    """Professor admin"""

    list_display = (
        'professor',
        'profession',
        'is_active',
    )

    search_fields = ('professor', 'profession')
    list_filter = ('professor',)


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    """Student admin"""

    list_display = (
        'student',
        'contact',
        'address_contact',
        'is_active',
    )

    search_fields = ('student', 'address_contact')
    list_filter = ('student',)


admin.site.register(User, CustomUserAdmin)