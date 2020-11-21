from django.shortcuts import render
from .models import City, Shelter, Breed, Kind, Animal, OrderNumber, Lemmas, \
    Transaction


def index(request):
    city = City.objects.filter(city='Самара')
    animals = Animal.objects.filter(city__in=city)
    context = {'animals': animals}
    return render(request, 'index.html', context)
