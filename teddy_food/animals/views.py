from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.generic import View

from .models import City, Shelter, Breed, Kind, Animal, OrderNumber, Lemmas, \
  Transaction


class Index(View):
    def get(self, request):
        context = []
        girls = Animal.objects.filter(sex='девочка').count()
        girls_home = Animal.objects.filter(sex='девочка', home=1).count()
        cat_girl = {'sex': 'девочка', 'total': girls, 'home': girls_home}
        context.append(cat_girl)
        boys = Animal.objects.filter(sex='мальчик').count()
        boys_home = Animal.objects.filter(sex='мальчик', home=1).count()
        cat_boy = {'sex': 'мальчик', 'total': boys, 'home': boys_home}
        context.append(cat_boy)

        return JsonResponse(context, safe=False)
