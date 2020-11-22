from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.generic import View

from .models import City, Shelter, Breed, Kind, Animal, OrderNumber, Lemmas, \
  Transaction


class Data(View):
    def get(self, request):
      context = []
      kind = Kind.objects.filter(title='Кошки')
      girls = Animal.objects.filter(sex='девочка', kind__in=kind)
      girls_all = girls.count()
      girls_home = girls.filter(home=1).count()
      cat_girl = {'sex': 'Девочка', 'total': girls_all, 'home': girls_home}
      context.append(cat_girl)
      boys = Animal.objects.filter(sex='мальчик', kind__in=kind).all()
      boys_all = boys.count()
      boys_home = boys.filter(home=1).count()
      cat_boy = {'sex': 'Мальчик', 'total': boys_all, 'home': boys_home}
      context.append(cat_boy)

      return JsonResponse(context, safe=False)


def get_amount(lemmas, sex):
    amount = 0
    kind = Kind.objects.filter(title='Кошки')
    lemmas = Lemmas.objects.filter(lemmas=lemmas)
    sex = Animal.objects.filter(sex=sex, kind__in=kind).all()
    transactions = Transaction.objects.filter(lemmas__in=lemmas, animal__in=sex)
    for transaction in transactions:
      amount += transaction.transaction_amount
    return amount


class SexAnalize(View):
    def get(self, request):
      context = []
      boy = {
        'sex': 'Мальчик',
        'toys': get_amount('игрушка', 'мальчик'),
        'meds': get_amount('лечение', 'мальчик')
      }
      context.append(boy)

      girl = {
        'sex': 'Девочка',
        'toys': get_amount('игрушка', 'девочка'),
        'meds': get_amount('лечение', 'девочка')
      }
      context.append(girl)

      return JsonResponse(context, safe=False)


def index(request):
    return render(request, 'index.html', {})
