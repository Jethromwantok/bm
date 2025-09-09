import tkinter as tk
import css

root = tk.Tk() # Initialize the main window

root.geometry("600x300") # Set window size
root.title("Desktop Application") # Set window title
lbl1 = tk.Label(root, text="First Name:", fg = 'red', font=css.font) # Create a label
lbl1.grid(row=0, column=0, padx=20, pady=20) # Place the label in the grid


entry1 = tk.Entry(root) # Create an entry widget
entry1.grid(row=0, column=1,  padx=20, pady=20) # Place the entry widget in the grid

# declaring a second label
lbl2 = tk.Label(root, text="Last Name:", fg = 'blue', font=css.font) # Create another label
lbl2.grid(row=1, column=0, padx=20, pady=20) # Place the second label in the grid
entry2 = tk.Entry(root) # Create another entry widget
entry2.grid(row=1, column=1, padx=20, pady=20) # Place the second entry widget in the grid

# declaring 3rd label
email = tk.Label(root, text="Email:", fg = 'green', font=css.font) # Create a third label
email.grid(row=0, column=2, padx=20, pady=20) # Place the third label in the grid
entry3 = tk.Entry(root) # Create a third entry widget   
entry3.grid(row=0, column=3, padx=20, pady=20) # Place the third entry widget in the grid

# declaring 4th label
phone = tk.Label(root, text="Password:", fg = 'purple', font=css.font) # Create a fourth label
phone.grid(row=1, column=2, padx=20, pady=20) # Place the fourth label in the grid
entry4 = tk.Entry(root) # Create a fourth entry widget'
entry4.grid(row=1, column=3, padx=20, pady=20) # Place the fourth entry widget in the grid

# declaring a button
btnC = tk.Button (root, text = 'Create User', bg = 'blue', fg = 'white', command=css.create, font=css.font ) # Create a button
btnC.grid(row=3, column=0, padx=20, pady=20) # Place the button in the grid


btnR = tk.Button (root, text = 'Fetch Users', bg = 'green', fg = 'white', command=css.read, font=css.font ) # Create another button
btnR.grid(row=3, column=1, padx=20, pady=20) # Place the second button in the grid

btnU = tk.Button (root, text = 'Update User', bg = 'orange', fg = 'white', command=css.update, font=css.font ) # Create a third button
btnU.grid(row=3, column=2, padx=20, pady=20) # Place the third button in the grid

btnD = tk.Button (root, text = 'Delete User', bg = 'red', fg = 'white', command=css.delete, font=css.font ) # Create a fourth button
btnD.grid(row=3, column=3, padx=20, pady=20) # Place the fourth button in the grid

radio1 = tk.Radiobutton(root, text = 'Gay')
radio1.grid(row=4, column=0, padx=20, pady=20)

#checkbox
chk1 = tk.Checkbutton(root, text="Remember Me", font=css.font)
chk1.grid(row=4, column=1, padx=20, pady=20)
root.mainloop()