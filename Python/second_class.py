"""
Python has 4 data collectors: List, set, tuple and dictionary
List is a data collection that is ordered, changeable and allows duplicates.
A list can accept any data type of variable e.g. Integer, numbers, float, complex and other data collectors

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
"""
#The ":" is to give a range of printing in a list
The format is listname[Proposed_start : proposed_stop]



"""

print(students[:])  # This prints from the beginning to the end
print(students[:4])  # This prints from the beginning to index four
print(students[2:])  # This prints from index two to the end
print(students[2:4])  # This prints from index two to index four
print(students[0: -1])

# Formatting statements
print(f"{students[0]} is not my type")  # The 'f' is for formatting and concatenation

"""
Given the list people = ["Ike","Ibe","Lawal","Yahaya","Ola","Jide"]
print from Ibe to Ola using negative index
print from Lawal to the end of the list
print from the beginning of the list to yahaya

"""
people = ["Ike", "Ibe", "Lawal", "Yahaya", "Ola", "Jide"]

print(people[-5: -1])
print(people[2:])
print(people[:-2])