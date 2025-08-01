import math
"""
Function in programming is a block of code that does a specific task.
We must first define a function before we can use it.

"""


def greet():
    print("Hello, Good Morning")


# Where print is not used in the function, we can use return to return a value, and print the whole function.
def hola():
    return "Hello, Good Morning"


# Function with parameters
def square(n):
    return n ** 2


print(square(1234567890))


def square(n):
    return n * n - 1 * n - 2


print(square(1234567890))


def checking(demo):
    if demo % 2 == 0:
        return f"{demo} is Even"
    else:
        return f"{demo} is Odd"


# recursive function
def recursive(n):
    if n == 0:
        return 1
    else:
        return n * recursive(n - 1)


# def pal(s):
#     if s == s[::-1]:
#         return f"{s} is a Palindrome"
#     else:
#         return f"{s} is not a Palindrome"

def pal(s):
    val = ''
    i = len(s) - 1
    while i >= 0:
        val += s[i]
        i -= 1
    if s == val:
        return f"{s} is a Palindrome"
    else:
        print(pal("madam"))


# Write a function that sums up all the arguments entered


# Arbitrary arguments **args
def summation(*args):
    add = 0
    args = list(args)
    for i in args:
        add += i
    return add

print(summation(3,4,5,6))

#Key Word Arguments **kwargs
def mydi(**people):
    for x,y in people.items():
        print(x,y)

mydi(name= 'John Doe', email = 'Johndoe@outlook.com', age = 29, favcolor = 'red')

# Function with a default argument

def city(city='Gwarinpa'):
    print(f"I live in {city}")

city("Lugbe")
city()

# Assignments
# Put quadractic formula in function
"""
Anonymous Function, lambda function
x = lanbda argument:expression
"""

greet = lambda : "Good day, Pythonistas"
print(greet())
cube = lambda a: a**3
print(cube(3))

# Quabractic equation

def quadractic(a,b,c):
    x1 = (-b + math.sqrt((b**2)- 4*a*c))/2*a
    x2 = (-b-((b**2)- 4*a*c)**0.5)/2*a
    return x1,x2

print(quadractic(1,-5,-14))

    

# help(math)

""" 
# def formQuad(x1,x2):

1. def mydi(**people):
    for x,y in people.items():
        print(x,y)

2. write a python function for solving a trapezium
3. write a python function that can sum this list values
    mylist = [[1,2,3],[4,5,6],[7,8,9]]
"""

mylist = [[1,2,3],[4,5,6],[7,8,9]]
sum = 0
for i in mylist:
    for j in i:
        sum += j

print(sum)
    

def areaOfTrapezium(a,b,h):
    area = 0.5*(a+b)*h
    return area

print(areaOfTrapezium(1,2,3))

def didi(**persons):
    for i in persons:
        print(f"{i} : {persons[i]}")



didi(name= 'John Doe', email = 'Johndoe@outlook.com', age = 29, favcolor = 'red')