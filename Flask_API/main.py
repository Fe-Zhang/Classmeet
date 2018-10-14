import logging
import os
import socket

from flask import Flask, request
from flask_api import FlaskAPI
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import sqlalchemy


app = FlaskAPI(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})



# [START gae_flex_postgres_app]
# Environment variables are defined in app.yaml.
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_DATABASE_URI']
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Classes(db.Model):
    Column_1 = db.Column(db.Integer, primary_key = True)
    Column_2 = db.Column(db.Text)


class userclasses(db.Model): #Sorry to the Camel Gods, they made me format it like this
    mytablekey = db.Column(db.Integer, primary_key = True)
    users = db.Column(db.String(255))
    classes = db.Column(db.String(255))



@app.route('/')
def index():
    return "Welcome to the Classes API. Our current endpoints are '/classes'"


@app.route('/classes/<int:key>', methods=['GET'])
def return_classes(key):
    classes = Classes.query.order_by(sqlalchemy.desc(Classes.Column_1)).limit(key)
    class_json = {}
    for course in classes:
        class_json[str(course.Column_1)] = str(course.Column_2)

    return class_json

@app.route('/user_classes/', methods=['GET','POST','PUT'])
def put_user_classes():
    given_user = str(request.args.get('user',''))
    classes = request.args.getlist('course')
    return_json = {'Added': []}

    courses = userclasses.query.filter_by(users=given_user).all()
    if len(courses) != 0:
        return {}
        #remove users that match the entry of USER PERSISTED THINGY
        #if not given_user:
        #    return {}
        #for given_course in courses:
        #    db.session.delete(userclasses(users=given_user, classes=given_course.classes))
        #    db.session.commit()
        #    return_json['Deleted'].append(given_course.classes)



    for chosen_course in classes:
        db.session.add(userclasses(
                        users = given_user,
                        classes = chosen_course
        ))
        db.session.commit()
        return_json['Added'].append(chosen_course)
    #add classes
    return return_json
#

@app.route('/get_classes_from_user/', methods=['GET'])
def get_classes_from_user():
    given_user = str(request.args.get('user', ''))
    if not given_user:
        return {}
    courses = userclasses.query.filter_by(users=given_user).all()

    return_json = {given_user: []}
    for course in courses:
        return_json[given_user].append((course.classes))
    return return_json



#otherway around, multiple args ?course=?course= etc
@app.route('/get_users_from_classes/', methods=['GET'])
def get_users_from_classes():
    given_courses = (request.args.getlist('course'))
    return_json = {}
    inputs = len(given_courses)
    if inputs <= 0:
        return {}
    else:
        for given_course in given_courses:
            output = userclasses.query.filter_by(classes=given_course).all()
            return_json[given_course] = [x.users for x in output]

    return return_json

@app.route('/find_most_similar_users/', methods=['GET'])
def get_similar_users():
    user = request.args.get('user', '')
    if not user:
        return {}
    dict_users = {}
    courses = userclasses.query.filter_by(users=user).all()

    for course in courses:
        output = userclasses.query.filter_by(classes=course.classes).all()
        for x in output:
            if str(x.users) != str(user):
                dict_users[x.users] = dict_users.setdefault(x.users,0) + 1

    if len(dict_users.keys()) < 5:
        amount = len(dict_users.keys())
    else:
        amount = 5
    topFive = list(sorted(dict_users, key=dict_users.__getitem__, reverse=True)[:amount])
    return {'users': topFive}


if __name__ == '__main__':
    # This is used when running locally. Gunicorn is used to run the
    # application on Google App Engine. See entrypoint in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
