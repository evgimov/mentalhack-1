from config import config

def database():
    firebase = config()
    db = firebase.database()
    users = db.child("journalled-32fb").get()
    #Other options can be found at https://github.com/thisbejim/Pyrebase
    return users.val()

def getUser(user_id):
    firebase = config()
    db = firebase.database()
    user = db.child("users").child(user_id).get().val()
    return user

def updateUser(user_id,jsonObj):
    firebase = config()
    db = firebase.database()
    db.child("users").child(user_id).update(jsonObj)
    return


def push_data(dataDict):
    firebase = config()
    db = firebase.database()
    results = db.child("users").push(dataDict)
    return  results['name']

def update_data_customKey(keyName, dataValue):
    firebase = config()
    db = firebase.database()
    data = {keyName: dataValue}
    db.update(data)
    return
