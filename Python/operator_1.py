import tkinter as tk
name = "John Doe"
print(name);
#Comment
'''
This is for 
Multiple line comments
i.e triple quotes
'''

#Choosing Variable names

"""
1. camel case: e.g firstName, fullName
2. pascal case: e.g FirstName, FullName
3. snake case: first_name, full_name

"""

#Data Types
"""
int, string, bool, float, array, objects, coplex
"""

num = 5
num1 = 5.5

print('Jethro\'s house')
i1 = 1
str2 = "i built this program from the ground up"
bool3 = True
float4 = 45.67
array5 = ["Apple", "pineapple" , "watermelon"]
comp = 7j

print(type(array5))
print(type(comp))
print(type(float4))
print(type(bool3))
print(type(str2))
print(type(i1))

"""
Operators
1 Arithmetic Operators; +,-,?,*,**,%,//
2 Assignment Operators; +=, =, -=, *= **=, /=, %=, //=
3 Comparison Operators; <,>,<=,>=,!=,==,===
4 Logical Operators; 'or', 'and', 
5 Membership Operators
"""

i = 4
j = 12
i += 5

j%3

print(i)
print(j%3)

e = 5
f = 6

if e>f:
    print("Yes")
else:
    print("No now")

# Logical Operators

k = 5
l = 7
m = 9
if k < l or m < l :
    print("Yes")
else:
    print("No")

if k < l and m > l:
    print("This is true")
else :
    print("This is false ")



