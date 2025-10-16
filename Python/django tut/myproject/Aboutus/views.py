from django.shortcuts import render


# Create your views here.

def Aboutus_view(request):
    context = {
        'username' : 'Esteemus',
        'email':'Peopleschoice@gmail.com',
        'phone':'08123456789'
    }

    return render(request, 'Aboutus/index.html', context)
