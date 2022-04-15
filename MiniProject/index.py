from flask import Flask,redirect,request,render_template
import mysql.connector
import random

app = Flask(__name__)
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="LinkShortner"
)
mycursor = mydb.cursor()

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
number = "0123456789"

@app.route("/")
def initmain():
    return render_template('home.html')   
             
 
@app.route("/<id>") 
def redirectid(id):
    sql = "SELECT * FROM links WHERE id = %s"
    val = (id,)
    mycursor.execute(sql,val)
    myresult = mycursor.fetchall()
    return redirect(myresult[0][0])          
        

id_shortid=""

@app.route("/Short/Link", methods=['GET','POST'])
def short_link():
     if request.method == 'POST' :
        link = request.form['link']
        all = lower+upper+number
        lenght = 6
        id = "".join(random.sample(all,lenght))
        sql = "INSERT INTO links (link, id) VALUES (%s, %s)"
        val = (link, id)
        mycursor.execute(sql, val)
        mydb.commit()
        print(mycursor.rowcount, "record inserted.")
        if mycursor.rowcount==1 :
            id_shortid=id
            response="[status: success,id=",id,"]"
        else :
            response="[status: failed]"
        
        return render_template('home.html',link="http://192.168.1.105:8080/"+id_shortid)
    
@app.route("/", methods=['GET','POST'])
def short_link_main():
     if request.method == 'POST' :
        link = request.form['link']
        all = lower+upper+number
        lenght = 6
        id = "".join(random.sample(all,lenght))
        sql = "INSERT INTO links (link, id) VALUES (%s, %s)"
        val = (link, id)
        mycursor.execute(sql, val)
        mydb.commit()
        print(mycursor.rowcount, "record inserted.")
        if mycursor.rowcount==1 :
            id_shortid=id
            response="[status: success,id=",id,"]"
        else :
            response="[status: failed]"
        
        return render_template('home.html',link="http://192.168.1.105:8080/"+id_shortid)

