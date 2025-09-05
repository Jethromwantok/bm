import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database ='briz',

)

#initializing cursor
mycursor = mydb.cursor()

dd = "SHOW DATABASES"
mycursor.execute(dd)
for i in mycursor:
    print(i)
#Create database
try:
    mycursor.execute('CREATE DATABASE briz')
except:
    print("Database already exists")


#Creating table in Database
try:
    sql = 'CREATE TABLE users (name VARCHAR(255), email VARCHAR(255))'
    mycursor.execute(sql)
except:
    print("Table already exists")

#Creating customers table with ID
try:
    sql = "CREATE TABLE customers (id Int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))"
    mycursor.execute(sql)
except:
    print("Table 'Customers' already exists")

#Inserting data into users table
sql = "INSERT INTO customers (name, email) VALUES (%s, %s)"
val = ("John Doe","johndoe@gmail.com")
mycursor.execute(sql, val)
mydb.commit()

for i in mycursor:
    print(i)

# insert multiple records
sql = "INSERT INTO customers (name, email) VALUES (%s, %s)"
val = [
  ('Peter Doe', 'peterdoe@gmail.com'),
  ('Amy Wine', 'amywine@gmail.com'),
  ('Hannah Montana', 'hannahmontana@gmail.com'),
  ('Michael Scofield', 'michaelscofield@gmail.com'),
  ('Sally Smith', 'sallysmith@gmail.com')
]
mycursor.executemany(sql, val)
mydb.commit()

#Fetching values from the table
sql = "SELECT * FROM customers"
mycursor.execute(sql)
res = mycursor.fetchall()
for i in res:
    print(i)


# fetch based on fields
sql2 = "SELECT name FROM customers"
mycursor.execute(sql2)
res = mycursor.fetchall()
for a in res:
    print(a)

# fetching using where clause
sql = "SELECT * FROM customers WHERE id = 1"
mycursor.execute(sql)
soln = mycursor.fetchall()
for i in soln:
    print(i)

    # Updating records
sql = "UPDATE customers SET name = 'Emeka Doe', email = 'Mekusdoe@gmail.com' WHERE id = 1"
mycursor.execute(sql)
mydb.commit()
for i in mycursor:
    print(i)

# Fetch Using LIMIT
sql = "SELECT * FROM customers LIMIT 5 OFFSET 2"
mycursor.execute(sql)
res = mycursor.fetchall()
for i in res:
    print(i)

# Presenting in Descending order
sql = "SELECT * FROM customers ORDER BY name DESC"
mycursor.execute(sql)
res = mycursor.fetchall()
for i in res:
    print(i)

# Deleting records
sql = "DELETE FROM customers WHERE id = 6"
mycursor.execute(sql)
mydb.commit()

# Delete table

try:
    sql = "DROP TABLE users"
    mycursor.execute(sql)
    mydb.commit()
except:
    print("Table does not exist")
# Delete database
try:
    sql = 'DROP DATABASE bizm'
    mycursor.execute(sql)
    mydb.commit()
except:
    print("Database does not exist")