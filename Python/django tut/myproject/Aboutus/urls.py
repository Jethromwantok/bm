from django.urls import path
from .views import Aboutus_view

urlpatterns = [
    path('/', Aboutus_view, name='About'),
]
