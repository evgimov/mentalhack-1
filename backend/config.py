import pyrebase

def config():
    config = {
        "apiKey": "AIzaSyCY-NHx7IIPQJwJJkBAej8eooFlnevtWUw",
        "authDomain": "therapy-finder.firebaseapp.com",  # Replace projectId with yours
        "databaseURL": "https://therapy-finder.firebaseio.com/",  # Replace databaseName with yours
        "storageBucket": "therapy-finder.appspot.com",  # Replace storageBucket with yours
        #  Uncomment line below in order to access as an admin (requires .json file with credentials)
        "serviceAccount": "../therapy-finder-firebase-adminsdk-fu06d-e4485b8bde.json"
    }

    firebase = pyrebase.initialize_app(config)
    return firebase
