"""
Loop Matthew into another variable
"""

thisName = "Matthew"
newName = ""

x = len(thisName)
print(x)

while x >= 1:
    newName += thisName[x - 1]
    x -= 1

print(newName)

# List Comprehension
"""
[output for variable in iterable condition]
thisList = ['Boy', 'Girl', 'Man']
[x for x in thisList]

"""
thisList = ['Boy', 'Girl', 'Man']
res = [x for x in thisList if x != 'Girl']
print(res)

# TUPLE

""""
Tuple is a data collection that is ordered, unchangeable, and allows duplicate. Tuple is one of python data collection 
i.e list, tuple, set, dictionary. Tuple uses parentheses as against the square brackets used by list. A tuple with only 
one element must have a comma at the end
"""

tup = ("Apple",)

print(type(tup))

# A tuple can have any data type

myTuple = ("Adam", 2, 2.4, ["girl", "boy"], ("Banana", "Avocado"), True, 3j, {"Ade", "Joshua"})
print(myTuple)

for i in myTuple:
    print(i)

# Most list functions can be accessed by tuple

myTup = tuple(newName)  # This is using the tuple constructor
print(myTup)
print(myTup[0])
print(myTup[1])

# Accessing range of values in a tuple
print(myTup[1: -1])

""""
Since Tuple is unchangeable, we cannot update the values directly, we can only convert it to a list using list 
constructor, make changes and then convert back to tuple

"""

himmy = ('Him', 'Her', 'He', 'She', 'They', 'Them')
untuple = list(himmy)
untuple[3] = 'Pile driver'
# print(hammy)
# del hammy
# print(hammy)
for a in himmy:
    print(a)

i = 0
while i < len(himmy):
    print(himmy[i])
    i += 1

(a, *c, b, f,) = (
    "Me", "You", "Us", "Them", "We", "Stew", "Horse")  # the asterisk collects all unassigned values

# print(a)
print(f)
print(b)
print(c)

"""
1. Run a loop on
s = 'Laptop' to return
potpal in the console
2. Given the tuple,  too = ("Biz", "Python","Tech")
change the Python to marrow
3. loop through the too tuple using any loop type of your choice
4. If y  = ['Apple', ['Banana'.'Orange'],'Cherry']
change the 'Banana' to 'kiwi'
"""

s = 'laptop'
t = ""
i = len(s) - 1
while i >= 0:
    t += s[i]
    i -= 1

print(t)

too = ("Biz", "Python", "Tech")

two = list(too)
two[1] = "marrow"
print(two)

too = tuple(two)
print(too)

j = 0
for j in too:
    print(j)

y = ['Apple', ['Banana', 'Orange'], 'Cherry']
y[1][0] = "Kiwi"

for ki in y:
    print(ki)
