"""
A. The set se={'a',"b","c"}. add 'e' to the set
loop through the set
change 'b' to 'f'

"""

se = {'a', "b", "c"}
es = list(se)
print(es)
es.append('e')
se = set(es)

for i in se:
    print(i)

dr = {'f', 'b'}

se.symmetric_difference_update(dr)

print(se)
# using dict() constructor
dict2 = dict(name="Joshua", email="Joshuaidoge@gmail.com")
print(dict2)

dict1 = {'Name': 'Jordan', 'Email': 'michaelJordan@yahoo.com', 'Age': 35, 'Married': True,
         'Children': ['Angel', 'Benedict', 'Cherry'], "Hobbies": ['Reading', 'Playing Basketball', 'Gaming']}
# for i in dict1:
#     print(i)

# Adding key:values to dictionaries
dict1.update({'Qualifications': ['B.Sc', 'M.Sc', 'Ph.D']})
print(dict1)
print(dict1['Children'][0])

# Removing Values
dict1.pop('Email')
del dict1['Hobbies']
dict1.clear()
del dict1

newDict = {
    'Name': 'Abayomi Ayodele',
    'Age': 26,
    'Email': "abayomiayodele25@gmail.com",
    'Gender': 'male',

}

# looping through a dictionary

for x in newDict:
    print(f"The key is {x}, And the value is {newDict[x]}")

for x, y in newDict.items():
    print(x, y)

# nested Dictionaries
parent = {
    "first": {
        "name": "Paul Gasin",
        "email": "paulgasin@gmail.com",
        "age": 35,
    },
    "second": {
        "name": "Garrison Milade",
        "email": "miladegarr@gmail.com",
        "age": 25,
    },
    "third": {
        "name": "Naleem Jartin",
        "email": "naleemjartin@gmail.com",
        "age": 28,
    },
    "fourth": {
        "name": "Kharjar Lekhilé",
        "email": "lekhilekharjar@gmail.com",
        "age": 30,
    },
}

print(parent)

for x, y in parent.items():
    for i, j in y.items():
        print(f"{i}:  {j}")

