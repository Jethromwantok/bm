from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def Aboutus_view(request):
    return HttpResponse("<h1 style='color:navy; font-family:verdana'>About Us</h1>" \
    "<p>We are a community dedicated to serving our customers since our advent in 2005. "
    "Contact us at <a href='mailto '>thepeopleschoice@gmail.com</a></p>")


# Create your views here.
