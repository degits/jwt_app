/*
Topic:  
json => token(encrypted json)

Description:
 

*/
import jwt from 'jsonwebtoken'
//const jwt = require('jsonwebtoken');
import secretKey from './key'

interface UserCerendetials {
    email: String,
    password: String
}

function generateToken(userCerendiatials: UserCerendetials) {
  return jwt.sign(userCerendiatials, secretKey);
}

export default generateToken;