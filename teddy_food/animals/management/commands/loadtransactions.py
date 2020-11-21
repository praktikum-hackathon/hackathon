import csv
from animals.models import Animal, OrderNumber, Lemmas, Shelter, Transaction
from django.core.management.base import BaseCommand


class Command(BaseCommand):

    def handle(self, *args, **options):
        data = []
        with open('tran-2.csv', 'r') as csvfile:
            reader = csv.DictReader(csvfile, delimiter=',')
            for row in reader:
                data.append(row)

        for i in data:
            pet_id = i['ИД питомца']
            shelter = i['Название приюта']
            transaction_amount = i['Сумма операции']
            date = i['Дата']
            order_number = i['Номер заказа']
            lemmas = i['lemmas']

            if not OrderNumber.objects.filter(
                    order_number=order_number).exists():
                print(f'Добавляю номер заказа {order_number}')
                order = OrderNumber(order_number=order_number)
                order.save()
            order_number = OrderNumber.objects.get(order_number=order_number)

            if not Lemmas.objects.filter(lemmas=lemmas, ).exists():
                print(f'Добавляю заказ {lemmas}')
                lemmas_animal = Lemmas(lemmas=lemmas)
                lemmas_animal.save()
            lemmas = Lemmas.objects.get(lemmas=lemmas)

            shelter = Shelter.objects.get(title=shelter)
            animal = Animal.objects.get(pet_id=pet_id)
            if not Transaction.objects.filter(
                    animal=animal.id,
                    shelter=shelter.id,
                    transaction_amount=transaction_amount,
                    date=date,
                    order_number=order_number.id,
                    lemmas=lemmas.id).exists():
                print(f'Добавляю транзакцию')
                transaction = Transaction(
                    animal=animal,
                    shelter=shelter,
                    transaction_amount=transaction_amount,
                    date=date,
                    order_number=order_number,
                    lemmas=lemmas)
                transaction.save()

        return '--Все транзакции добавленны--'
