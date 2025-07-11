"""
Python has 4 data collectors: List, set, tuple and dictionary
List is a data collection that is ordered, changeable and allows duplicates.
A list can accept any data type of variable e.g Integer, numbers, float, complex and other data collectors

list-[]
Ordered (Has a specific order and can be accessed using the index).
Changeable (You can update values of the list).
Allows Duplicates (You can list a particular item twice)
It can also receive any data type


set-{}
tuple- 
dictionary
"""

fruits = ["Apple", "Banana", "Cherry", "Guava"]

print(fruits)
print(type(fruits))

num = [True, 7, "Ade", ["Lawal", "Uche"], 7j]

print(num)

Fruits = {"Apple", "Banana", "Cherry", "Guava"}
print(type(Fruits))
FRUITs = ("Apple", "Banana", "Cherry", "Guava")
print(type(FRUITs))

# CRUD = Create, Read, Update, Delete
# Creating a list using the list constructor
food = list(("Rice", "Beans", "Yam"))
print(food)

"""
What is a spread operator

RESEARCH
int()
str()
float()
bool()
complex()

"""


def clear(number, frequency):
    milli = int(number) * int(frequency)
    return milli


print(clear(56, 67))
print(num[3][0])

students = ["John", "Peter", ["Mary", "Jane", "Lucy"], "Joel", "Paul"]

print(students[2][1])