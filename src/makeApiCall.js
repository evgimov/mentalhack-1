
var axios = require('axios');

function saveUser(data){
    return axios.post(`http://127.0.0.1:5000/user`, data);
}

function getUser(user_id){
    return axios.get(`http://127.0.0.1:5000/user?user_id=${user_id}`);
}

const makeApiCall = {
    saveUser, getUser
}

export default makeApiCall;