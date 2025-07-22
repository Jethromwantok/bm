"""
A set is one of the four data collection types in python. Set is unordered, unchangeable,
and does not allow duplicate. Set also does not have index. But we can add items using add() and update() method.
We can remove items using remove(), and discard() method. False and zero, as well as true and 1 are the same in a set.
It can accept any data type
"""

# Creating a set using a string literal
sett = {"Apple", "Banana", "Orange", "Cherry", "Apple", False, 0, True, 1}
print(sett)

for i in sett:
    print(i)
"""

"""

"""
Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
"""
print(len(sett))
# Adding single values
sett.add("Chair")
print(sett)
# Adding multiple values using update() method
newSet = {"Avocado", "Squash", "Papaya", "Banana"}

sett.update(newSet)
print(sett)

# deleting
# we use discard(), remove(),
sett.pop()

print(sett)

# Union of set: This is used to join two or more sets
# x = {"Biz", "Marrow"}

y = {"Tech", "Abuja"}
z = {"Nigeria", "West Africa"}
# u = x.union(y,z)
u = x | y | z
print(u)
# Using update() to join different iterables
t = ["Ada", "Ngozi", "Amaka", "Chidera", "Nkem", "Obianuju"]
c = {"Tolu", "Dara", "Ade", "Femi", "Olamide", "Ogooluwa"}
p = ("Bulus", "Bitrus", "Musa", "Ishaku", "Hauwa", "Ibrahim")
q = c.union(t, p)
print(q)
# Intersection of sets
i = {"Apple", "Banana", "Cherry"}
j = {"Kiwi", "Orange", "Apple"}
k = i.intersection(j)
print(k)
j.intersection_update(i)
print(j)
# Difference of set
l = {"a", "b", "c"}
m = {"e", "a", "f"}

# Difference
n = l.difference(m)
o = l.difference_update(m)
print(n)
print(o)
# symmetric difference

p = l.symmetric_difference(m)
q = l.symmetric_difference_update(m)
print(p)
print(q)
