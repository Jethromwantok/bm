from django.shortcuts import render


# Create your views here.

def home_view(request):
    context = {
        'username': 'Django Developer'
    }
    return render(request, 'home/index.html', context)  # request is trying
