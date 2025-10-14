from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# Python views are functions that we use to organize the
# Content of a webpage
# Types - Two: Function views and classes based views

def home_view(request):
    return HttpResponse("<h1 style = 'color: navy'>This is our Home Page</h1>")

# Create your views here.
