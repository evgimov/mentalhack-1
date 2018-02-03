from firebase import firebase
from firebase.firebase import FirebaseApplication
from firebase.firebase import FirebaseAuthentication

if __name__ == '__main__':
    app = FirebaseApplication('https://therapy-finder.firebaseio.com', authentication=None)
    authentication = FirebaseAuthentication('Anarch1stCat3!','rosalie.m.stevenson@gmail.com', extra={'id': 123})
    app.authentication = authentication
    print (authentication.extra)
