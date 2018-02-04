# Operation Phonetree

backend:
- config.py: contains configuration data of the firebrand interaction: api, database url, other database information. 
  - "serviceAccount" will always have to be set to the sdk file (currently defined as "../therapy-finder-firebase-adminsdk-fu06d-e4485b8bde.json", as its in the directory above the config file. If this is not included, permissions issues will occur.
- database.py: this is where the interactions with firebrand exist. There will be interactions with getting, updating, and creating users in the firebrand database. 
- interact_with_firebase.py: creates/runs the flask app/api calls. 
 - This is a flask app, therefore the flask app will have to be started locally by running "python interaction_with_firebase.py" within the project. This will spawn a server with the url "http://127.0.0.1:5000/". 
- To update a user, create a put request with new fields to be added to the user object, defined through a query parameter "user_id" that refers to an existing user. example: request url: http://127.0.0.1:5000/user?user_id=user_id, body: json object with mappings of new variables. 
- To get a user, make the following call: http://127.0.0.1:5000/user?user_id=user_id as a get request. This will return all of the data within the firebase object associated with that user id. 
- To create a user, make the following call: http://127.0.0.1:5000/user as a post request, using a json object body (eg.: "{"email":"test@test.com", "firstName":"Roisin", "lastName":"Riveter", "primaryIssue":"bipolar", "secondaryIssue":"substance abuse","scheduling":["Mondays 3-5"]}"). 
