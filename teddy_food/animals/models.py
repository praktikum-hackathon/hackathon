from django.db import models


class City(models.Model):
    city = models.CharField(verbose_name='город приюта',
                            max_length=255,
                            unique=True)

    def __str__(self):
        return self.city


class Shelter(models.Model):
    title = models.CharField(verbose_name='название приюта', max_length=255)

    def __str__(self):
        return self.title


class Breed(models.Model):
    title = models.CharField(verbose_name='порода животного', max_length=255)

    def __str__(self):
        return self.title


class Kind(models.Model):
    title = models.CharField(verbose_name='вид животного', max_length=255)

    def __str__(self):
        return self.title


class Animal(models.Model):
    pet_id = models.IntegerField()
    nickname = models.CharField(verbose_name='animal_name', max_length=255)
    url = models.URLField(max_length=255)
    shelter = models.ForeignKey(Shelter, on_delete=models.CASCADE,
                                related_name='animals')
    city = models.ForeignKey(City, on_delete=models.CASCADE,
                             related_name='animals')
    breed = models.ForeignKey(Breed, on_delete=models.CASCADE,
                              related_name='animals')
    kind = models.ForeignKey(Kind, on_delete=models.CASCADE,
                             related_name='animals')
    date_of_birth = models.DateField()
    sex = models.CharField(verbose_name='animal_sex', max_length=10)
    favorite = models.IntegerField()
    home = models.IntegerField()
    take_home = models.IntegerField()
    walk = models.IntegerField()

    def __str__(self):
        return self.nickname


class OrderNumber(models.Model):
    order_number = models.IntegerField()

    def __str__(self):
        return self.order_number


class Lemmas(models.Model):
    lemmas = models.CharField(max_length=255)

    def __str__(self):
        return self.lemmas


class Transaction(models.Model):
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE,
                               related_name='transactions')
    shelter = models.ForeignKey(Shelter, on_delete=models.CASCADE,
                                related_name='transactions')
    transaction_amount = models. FloatField()
    date = models.DateTimeField()
    order_number = models.ForeignKey(OrderNumber, on_delete=models.CASCADE,
                                     related_name='transactions')
    lemmas = models.ForeignKey(Lemmas, on_delete=models.CASCADE,
                               related_name='transactions')

    def __str__(self):
        return self.lemmas