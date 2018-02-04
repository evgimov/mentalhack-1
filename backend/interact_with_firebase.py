# using https://flask-restful.readthedocs.io/en/latest/installation.html#installation
# https://flask-restful.readthedocs.io/en/latest/quickstart.html
from flask import Flask, request, jsonify
import json
from flask_restful import reqparse, Api, Resource
from config import config
from database import database, update_data_customKey, push_data, getUser, updateUser

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('email')
parser.add_argument('password')
parser.add_argument('childName')
parser.add_argument('dataValue')
parser.add_argument('keyName')

class user(Resource):

    def get(self):
        user_id = request.args.get('user_id')
        data = getUser(user_id)
        print "data: "+str(data)
        return data,200

    def post(self):
        dataDict = json.loads(request.data)
        uid = push_data(dataDict)
        return {"user_id":uid}

    def put(self):
        dataDict = json.loads(request.data)
        uid = request.args.get('user_id')
        data = updateUser(uid, dataDict)
        return 200

#
# Actually setup the Api resource routing here
#
api.add_resource(user, '/user')


if __name__ == '__main__':
    app.run(debug=True)
