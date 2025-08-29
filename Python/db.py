import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="biz"
)
print(mydb)
#initializing cursor
mycursor = mydb.cursor()
#Create database
try:
    sql = "CREATE DATABASE biz"
    mycursor.execute(sql)
except:
    print("Database already exists")

for i in mycursor:
    print(i)

#Creating table in Database
try:
    sql = "CREATE TABLE users (name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))"
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