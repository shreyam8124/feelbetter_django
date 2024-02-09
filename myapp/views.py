from django.shortcuts import render



# Create your views here.
def home(request):
    return render(request,'main.html')
def great(request):
    return render(request,'great.html')
def bleh(request):
    return render(request,'bleh.html')
def meh(request):
    return render(request,'meh.html')
def result(request):
    return render(request,'result.html')
def test(request):
    return render(request,'test.html')


