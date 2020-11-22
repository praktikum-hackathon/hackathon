from django.urls import path

from . import views

urlpatterns = [
    path('data/', views.Data.as_view(), name='data'),
    path('sex/', views.SexAnalize.as_view(), name='sexanalize'),
    path('', views.index, name='index'),

]
