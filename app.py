from flask import Flask, render_template, request
from datetime import datetime
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    name = request.form['name']
    birthday = request.form['birthday']
    date_object = datetime.strptime(birthday, '%Y-%m-%d')
    month = date_object.strftime('%m')
    day = date_object.strftime('%d')
    return render_template('birthday.html', name=name, month=month, day=day)

if __name__ == '__main__':
    app.run(debug=True)
