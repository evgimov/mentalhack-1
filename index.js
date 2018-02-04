const { path } = require("ramda");

exports.webhook = function webhook(req, res) {
  let response;
  if (path(["result", "parameters", "individual"], req.body)) {
    response = "Awesome! We found you a therapist";
  } else if (path(["result", "parameters", "individual"], req.body) === false) {
    response = "Okay. Thank you for contacting us.";
  } else {
    response = "There seems to be an error!";
  }

  res.setHeader("Content-Type", "application/json"); //Requires application/json MIME type
  res.send(
    JSON.stringify({
      speech: response,
      displayText: response
      //"speech" is the spoken version of the response, "displayText" is the visual version
    })
  );
};
