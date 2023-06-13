from flask import Flask, render_template, request, redirect #imported flask, request module
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__) #initialised app
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///todo.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Todo(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    desc = db.Column(db.String(500), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self) -> str:
        return f"{self.sno} - {self.title}"
    
with app.app_context():
    db.create_all() #automatically creates all dbs, tables with the stated schema

@app.route('/', methods = ['GET','POST']) # created routes and endpoints, passing list for the methods
def home():
    if request.method == 'POST': #handling post request
        title = request.form['title']
        desc = request.form['desc']
        todo = Todo(title=title, desc=desc) #created Todo instances
        db.session.add(todo)
        db.session.commit()
    allTodo = Todo.query.all()
    print(allTodo)
    return render_template('index.html', allTodo=allTodo)

@app.route('/update/<int:sno>', methods = ['GET','POST'])
def update(sno):
    if request.method == "POST":
        title = request.form['title']
        desc = request.form['desc']
        todo = Todo.query.filter_by(sno=sno).first() # 
        todo.title = title
        todo.desc = desc
        db.session.add(todo)
        db.session.commit()
        return redirect("/")
    todo = Todo.query.filter_by(sno=sno).first() # 
    return render_template('update.html', todo=todo)

@app.route('/delete/<int:sno>') # ninja2 syntax to take arguments in route
def delete(sno):
    todo = Todo.query.filter_by(sno=sno).first() # 
    db.session.delete(todo)
    db.session.commit()
    return redirect("/")

if __name__ == "__main__" :
    app.run(debug=True) # debug = True will present a error page with supporting links when encountered with an error, only keep it true while developing
