import datetime
"""

"""

age = 20
if age < 18:
    print("You're a Child")
else:
    print("You're an Adult")

x = datetime.datetime.now()
print(x)
h = int(x.strftime("%H"))
print(h)

if h < 12:
    print("Good Morning")
elif h > 12 & h < 16 :
    print("Good Afternoon")
elif h < 20:
    print("Good Evening")
else:
    print("Good Night")

# Python match cases
w = int(x.strftime("%w"))
print(w)

match w:
    case 0:
        print("Sunday")
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4:
        print("Thursday")
    case 5:
        print("Friday")
    case 6:
        print("Saturday")
    case _:
        print('Invalid Input')

