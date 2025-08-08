"""OOP means object-oriented programming. It is a kind of programming where we use classes to make definitions for
objects. Then objects are instances of the class that makes use of the class properties. The self keyword is used to
take the place of the object at function definition. in class definition, we might use: self.name while at the object
level, we use ford.name, provided that ford is the nameof the object. The __init__() method is a built-in method that
is called automatically whenever a new object is being instantiated The  __str__() method is used to print a human- readable


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

    def __str__(self):  # This is for
        return self.name

    def detail(self):
        return f"The name of the car is {self.name}, produced in {self.year} with color {self.color}"


ford = Car("Ford", 1814, "Turquoise")
chevrolet = Car("Chevrolette", 2012, "Blue")
print(ford)
print(chevrolet.detail())

ford.year = 2027
ford.color = 'blue'
print(ford.detail())

#Create a class animal and define a mehod called sound. Properties; name, legs, color
