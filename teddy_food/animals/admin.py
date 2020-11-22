from django.contrib import admin
from django.db import models

from .models import City, Shelter, Breed, Kind, Animal, OrderNumber, Lemmas, Transaction


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('pk', 'city')
    search_fields = ('city',)
    list_filter = ('city',)
    empty_value_display = 'None'


@admin.register(Shelter)
class ShelterAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title')
    search_fields = ('title',)
    list_filter = ('title',)
    empty_value_display = 'None'


@admin.register(Breed)
class BreedAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title',)
    search_fields = ('title',)
    list_filter = ('title',)
    empty_value_display = 'None'


@admin.register(Kind)
class KindAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title',)
    search_fields = ('title',)
    list_filter = ('title',)
    empty_value_display = 'None'


@admin.register(Animal)
class AnimalAdmin(admin.ModelAdmin):
    list_display = ('pk', 'pet_id',  'nickname', 'shelter', 'city',
                    'url',
                    'breed',
                    'kind',
                    'date_of_birth',
                    'sex',
                    'favorite',
                    'home',
                    'take_home',
                    'walk',
                    )
    search_fields = ('nickname',)
    list_filter = ('nickname',)
    empty_value_display = 'None'


@admin.register(OrderNumber)
class OrderNumberAdmin(admin.ModelAdmin):
    list_display = ('pk', 'order_number')


@admin.register(Lemmas)
class LemmasAdmin(admin.ModelAdmin):
    list_display = ('pk', 'lemmas')


@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('pk', 'animal',  'shelter', 'transaction_amount',
                    'date', 'order_number',
                    'lemmas',)
