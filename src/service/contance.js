export const ip = "http://192.168.2.200:3080/"
// export const ip = "http://172.20.10.2:3080/"

// export const ip = "http://172.20.10.2:3080/"

var jwt_decode = require('jwt-decode');

const decode_token = (user_token_decoded_func) => {
    let decoded
    if (user_token_decoded_func) {
        decoded = jwt_decode(user_token_decoded_func);
    } else {
        decoded = { id: null, type: null }
    }
    return decoded;
}