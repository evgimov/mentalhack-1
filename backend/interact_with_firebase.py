from firebase import firebase
from firebase.firebase import FirebaseApplication
from firebase.firebase import FirebaseAuthentication
import configparser

if __name__ == '__main__':
    app = FirebaseApplication('https://therapy-finder.firebaseio.com', authentication=None)
    config = configparser.ConfigParser()
    pwd = config.read('pwd.cfg')
    authentication = FirebaseAuthentication(pwd,'rosalie.m.stevenson@gmail.com', extra={'id': 123})
    app.authentication = authentication
