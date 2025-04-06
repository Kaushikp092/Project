import mysql.connector

# Create a connection to the MySQL database
mydb = mysql.connector.connect(
host="localhost",
user="root",
password="kaushik19",
database="project"
)

print(mydb)

cur = mydb.cursor()

cur.execute("SELECT * FROM YOUR_TABLE_NAME")


