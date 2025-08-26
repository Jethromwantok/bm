import tkinter as tk
from abc import ABC, abstractmethod

"""
OOP means object-oriented programming. It is a kind of programming where we use classes to make definitions for
objects. Then objects are instances of the class that makes use of the class properties. The self keyword is used to
take the place of the object at function definition. in class definition, we might use: self.name while at the object
level, we use ford.name, provided that ford is the nameof the object. The __init__() method is a built-in method that
is called automatically whenever a new object is being instantiated The  __str__() method is used to print a
human-readable


Encapsulation:
Hiding Some parts 


Polymorphism:

Inheritance:

Keyword:

"""


def speed(value):
    return f"{value}KPH"


class Car:

    def __init__(self, name, year, color):
        self.name = name
        self.year = year
        self.color = color

    def __str__(self):  # This is to return human-readable string when the class is to be printed to console
        return self.name

    def detail(self):
        return f"The name of the car is {self.name}, produced in {self.year} with color {self.color}"


# The self Keyword is to take the place of the variable inheriting the class at the initialization level
ford = Car("Ford", 1814, "Turquoise")
chevrolet = Car("Chevrolette", 2012, "Blue")
print(ford)
print(chevrolet.detail())

ford.year = 2027
ford.color = 'blue'
print(ford.detail())


# Create a class animal and define a method called sound. Properties; name, legs, color

class Animal:
    def __init__(self, name, legs, color):
        self.name = name
        self.legs = legs
        self.color = color

    def sound(self, animalsound):
        return f"The {self.name} {animalsound}s"


lion = Animal("Lion", "Four legs", "Brown")
dog = Animal("Dog", "Four legs", "White")

print(lion.sound("Roar"))


class Person:
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age

    def __str__(self):
        return f"Name:{self.name}, Age: {self.age}"

    def details(self):
        return f"My name is {self.name}, My email is {self.email}, I am {self.age} years Old"


class Student(Person):
    def __init__(self, name, email, age, score):
        self.score = score
        # super().__init__(name, email,age) # at this point, student class inherits from Person class
        Person.__init__(self, name, email, age)


stud1 = Student("Michael Douglas", "Michaeldouglas@gmail.com", 18, 79)
print(stud1.details())


class Account:
    def __init__(self, name, balance=0):
        self.name = name
        self.balance = balance

    def balanceInquiry(self):
        return f"You have ${self.balance} remaining"

    def deposit(self, amount):
        self.balance += amount
        return f"${amount} Deposited successfully"

    def withdraw(self, amount):
        if self.balance < amount:
            return "Insufficient Funds"
        else:
            self.balance -= amount
            return f"${amount} Withdrawn Successfully"


ade = Account("Ademola Adetokumbo")

print(ade.balance)
print(ade.withdraw(2000))
print(ade.deposit(10000))
print(ade.withdraw(2000))
print(ade.balanceInquiry())

"""
Assignment
Create a class called shop with 
PROPRTIES
productname 
price 
quantity
METHODS:
Buy
    reduce product quantity
Detail
    show everything about the product    


"""


class Product:
    def __init__(self, productName, price, productQuantity):
        self.productName = productName
        self.price = price
        self.productQuantity = productQuantity

    def buyProduct(self, quantity):
        if quantity < self.productQuantity:
            print(f"We only have {self.productQuantity} products left")
        else:
            print(f"Total price is NGN{self.price * quantity}")

    def displayDetails(self):
        print(f"Product: {self.productName}")
        print(f"Price: {self.price}")
        print(f"Quantity Left: {self.productQuantity}")


"""
Encapsulation talks about how properties of a class should be managed i.e updated or accessed.
There are three ways of accessing class properties
1. Public: This means that properties could be accessed by anyone or any program
2. Protected: Here, the class properties could be accessed by child classes. We use single Underscore(_)
3. Private: Here, class properties could only be managed by getters and setters. Here, we use double underscore(__)

"""

class Vehicle:
    def __init__(self, name, year, color, engine):
        self.engine = engine
        self._name = name # Single Underscore
        self.__year = year # Double Underscore
        self.__color = color


    def __str__(self):
        return self.name

    def getYear(self):
        return self.__year
    def getColor(self):
        return self.__color
    def setColor(self, val):
        self.__color = val
    def setYear(self, val):
        self.__year = val

honda = Vehicle("Honda Accord", 2023, "red", "V8")
honda.engine = "V8"
print(honda.engine)
honda.setYear(2024)
print(honda.getYear())
print(honda.getColor())

class Car(Vehicle):
    def __init__(self, name, year, color, engine):
        super().__init__(name, year, color, engine)
 

    
kia = Car("Kia", 2023, "blue", "V6")
print(kia._name)

"""
Polymorphism is the ability of different classes to appear in different forms when being called on different child classes.

Abstraction: 
"""