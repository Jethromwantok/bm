import os
"""
File handling affords us a way of CRUD operations .
We open files using the built-in 'open()' method, specify the name of the file and the mode of opening

Modes:
1. 'r' for read
2. 'a' for appending
3. 'w' for writing, overwrites old information
4. 'x' for creating new file

"""

f = open('err.py')
print(f.readline())
print(f.readline())
print(f.readline())
print(f.readline())

with open('err.py') as y: # This is self closing
    for i in y:
        print(i)

try:
    g = open('text.txt','x')
except:
    print("File already exists")

ap = open('text.txt','a')
ap.write('This is amazing')
ap.close()