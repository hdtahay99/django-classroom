DATABASES = {
    'default': {
        'ENGINE'   : 'django.db.backends.mysql',
        'NAME'     : os.path.join(BASE_DIR, 'db.classroom'),
        'USER'     : 'root',
        'PASSWORD' : 'D5ekyngy',
        'HOST'     : 'localhost',
        'PORT'     : 3306,
    }
}