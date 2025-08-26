"""
Error handling
Error handling has to do with creating failsafes in cases of possible errors whether by syntax or other types of errors and avoiding
a total shutdown of the program

"""

try:
    num = 6/0
    print(num)
except ZeroDivisionError:
    print("Cannot divide by Zero (0)")
except:
    print("Invalid input")