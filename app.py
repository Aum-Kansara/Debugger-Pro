from flask import Flask,render_template,request
from sqlite3 import connect

app=Flask(__name__)
@app.route("/",methods=["GET","POST"])
def homePage():
    if request.method=="POST":
        return render_template("index.html")
    return render_template("index.html")

@app.route("/signup",methods=["GET","POST"])
def signUpPage():
    if request.method=="POST":
        return render_template("signup.html")
    return render_template("signup.html")

@app.route("/login",methods=["GET","POST"])
def loginPage():
    if request.method=="POST":
        return render_template("login.html")
    return render_template("login.html")

if __name__=="__main__":
    app.run(debug=True,host="0.0.0.0")