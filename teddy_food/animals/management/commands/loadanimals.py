import csv
from animals.models import City, Shelter, Breed, Kind, Animal
from django.core.management.base import BaseCommand


class Command(BaseCommand):

    def handle(self, *args, **options):
        data = []
        with open('TF.csv', 'r') as csvfile:
            reader = csv.DictReader(csvfile, delimiter=',')
            for row in reader:
                data.append(row)

        for i in data:
            pet_id = i['id']
            nickname = i['Кличка']
            url = i['Ссылка на профиль']
            shelter = i['Приют']
            breed = i['Порода']
            kind = i['Вид']
            date_of_birth = i['Дата рождения']
            sex = i['Пол']
            favorite = i['В избранном']
            home = i['Уже дома']
            take_home = i['Забрать домой']
            walk = i['Погулять']
            city = i['Город']

            if not City.objects.filter(city=city).exists():
                print(f'Добавляю {city}')
                city_animals = City(city=city)
                city_animals.save()
            city = City.objects.get(city=city)

            if not Shelter.objects.filter(title=shelter).exists():
                print(f'Добавляю приют {shelter}')
                shelter_animal = Shelter(title=shelter)
                shelter_animal.save()
            shelter = Shelter.objects.get(title=shelter,)

            if not Breed.objects.filter(title=breed).exists():
                print(f'Добавляю породу {breed}')
                breed_animal = Breed(title=breed)
                breed_animal.save()
            breed = Breed.objects.get(title=breed)

            if not Kind.objects.filter(title=kind).exists():
                print(f'Добавляю вид животного {kind}')
                kind_animal = Kind(title=kind)
                kind_animal.save()
            kind = Kind.objects.get(title=kind)

            if not Animal.objects.filter(pet_id=pet_id).exists():
                print(f'Добавляю животное {nickname} вида {kind}')
                animal = Animal(
                    pet_id=pet_id,
                    nickname=nickname,
                    url=url,
                    shelter=shelter,
                    breed=breed,
                    kind=kind,
                    date_of_birth=date_of_birth,
                    sex=sex,
                    favorite=favorite,
                    home=home,
                    take_home=take_home,
                    walk=walk,
                    city=city,
                )
                animal.save()

        return '--Все животные добавленны--'
