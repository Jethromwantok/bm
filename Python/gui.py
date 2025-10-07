import tkinter as tk
import css
import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",    
    database="tkinter"
)

mycursor = mydb.cursor()

try:
    sql = "CREATE TABLE users (id Int AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(255), lname VARCHAR(255), email VARCHAR(255), password VARCHAR(255))"
    mycursor.execute(sql)
except:
    print("Table already exists")


root = tk.Tk() # Initialize the main window

root.geometry("600x300") # Set window size
root.title("Desktop Application") # Set window title

# Creating Variables
lname_var = tk.StringVar()
fname_var = tk.StringVar()  
email_var = tk.StringVar()
password_var = tk.StringVar()

lbl1 = tk.Label(root, text="First Name:", fg = 'red', font=css.font) # Create a label
lbl1.grid(row=0, column=0, padx=20, pady=20) # Place the label in the grid


entry1 = tk.Entry(root, textvariable = fname_var) # Create an entry widget
entry1.grid(row=0, column=1,  padx=20, pady=20) # Place the entry widget in the grid

# declaring a second label
lbl2 = tk.Label(root, text="Last Name:", fg = 'blue', font=css.font) # Create another label
lbl2.grid(row=1, column=0, padx=20, pady=20) # Place the second label in the grid
entry2 = tk.Entry(root, textvariable = lname_var) # Create another entry widget
entry2.grid(row=1, column=1, padx=20, pady=20) # Place the second entry widget in the grid

# declaring 3rd label
email = tk.Label(root, text="Email:", fg = 'green', font=css.font) # Create a third label
email.grid(row=0, column=2, padx=20, pady=20) # Place the third label in the grid
entry3 = tk.Entry(root, textvariable = email_var) # Create a third entry widget   
entry3.grid(row=0, column=3, padx=20, pady=20) # Place the third entry widget in the grid

# declaring 4th label
phone = tk.Label(root, text="Password:", fg = 'purple', font=css.font) # Create a fourth label
phone.grid(row=1, column=2, padx=20, pady=20) # Place the fourth label in the grid
entry4 = tk.Entry(root, textvariable = password_var) # Create a fourth entry widget'
entry4.grid(row=1, column=3, padx=20, pady=20) # Place the fourth entry widget in the grid


def ty():
    print(fname_var.get())


def create():
    sql = "INSERT INTO users (fname, lname, email, password) VALUES (%s,%s,%s,%s)"
    val = (fname_var.get(), lname_var.get(), email_var.get(), password_var.get())
    mycursor.execute(sql, val)
    mydb.commit()

def read():
    print("Fetching Users...")

def update():
    print("Updating User...")

def delete():
    print("Deleting User...")


# declaring a button
btnC = tk.Button (root, text = 'Create User', bg = 'blue', fg = 'white', command = create, font=css.font ) # Create a button
btnC.grid(row=3, column=0, padx=20, pady=20) # Place the button in the grid


btnR = tk.Button (root, text = 'Fetch Users', bg = 'green', fg = 'white', command=read, font=css.font ) # Create another button
btnR.grid(row=3, column=1, padx=20, pady=20) # Place the second button in the grid

btnU = tk.Button (root, text = 'Update User', bg = 'orange', fg = 'white', command=update, font=css.font ) # Create a third button
btnU.grid(row=3, column=2, padx=20, pady=20) # Place the third button in the grid

btnD = tk.Button (root, text = 'Delete User', bg = 'red', fg = 'white', command=delete, font=css.font ) # Create a fourth button
btnD.grid(row=3, column=3, padx=20, pady=20) # Place the fourth button in the grid

radio1 = tk.Radiobutton(root, text = 'Gay')
radio1.grid(row=4, column=0, padx=20, pady=20)

#checkbox
chk1 = tk.Checkbutton(root, text="Remember Me", font=css.font)
chk1.grid(row=4, column=1, padx=20, pady=20)
root.mainloop()