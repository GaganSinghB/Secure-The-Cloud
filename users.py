import eel
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="login"
)

# Bool which indicates if admin is logged in or not
privilege = False
status = 0

# Function to create a new user
@eel.expose
def newUser(createLogin, createPassword, mobile):
    mycur = mydb.cursor()
    sql = "select * from users where username = %s"
    val = [createLogin]
    mycur.execute(sql,val)
    results = mycur.fetchall()
    if results:
        eel.existingUser()
        print("\nLogin name already exist! Try again\n")
    else:
        sql = "INSERT INTO users (username, password, mobile) VALUES (%s, %s, %s)"
        val = (createLogin, createPassword, mobile)
        mycur.execute(sql, val)
        mydb.commit()
        eel.userCreated()
        print("\nUser created\n")

# Function which allows user to login
@eel.expose
def login(login, password):
    global privilege
    global status
    
    mycur = mydb.cursor()
    sql = "select * from users where username = %s and password = %s"
    val = (login, password)
    mycur.execute(sql,val)
    results = mycur.fetchall()
    if results and login == "admin":
        privilege = True
        status = 1
        print("\nLogin successful!\n")
        for val in results:
            mobile = val[2]
            return mobile
    elif results:
        status = 1
        print("\nLogin successful!\n")
        for val in results:
            mobile = val[2]
            return mobile
    else:
        status = -1
        print("\nUser doesn't exist or wrong password! Try again.\n")

# Function to delete a user
@eel.expose
def deleteUser(userName):
    mycur = mydb.cursor()
    sql = "select * from users where username = %s"
    val = [userName]
    mycur.execute(sql,val)
    results = mycur.fetchall()
    if userName == "admin":
        print("Cannot delete the admin account.\n")
        return -1
    elif results:
        sql = "delete from users where username = %s"
        val = [userName]
        mycur.execute(sql, val)
        mydb.commit()
        print("User deleted.\n")
        return 1
    else:
        print("User name does not exist in network.\n")
        return 0

@eel.expose
def logOutPy():
    global privilege
    global status
    privilege = False
    status = 0

