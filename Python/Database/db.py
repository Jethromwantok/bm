import mysql.connector

mydb = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    password = '',
    database = 'Nyla'
)
print(mydb)
#initializing the cursor
mycursor = mydb.cursor()
#create database
try:
    sql = "CREATE DATABASE Nyla"
    mycursor.execute(sql)
except:
    print("Database already exists")    


