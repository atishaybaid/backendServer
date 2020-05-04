import jwt from 'jsonwebtoken';
import config from "../config/dev.js";
import { resolve } from 'upath';




export const generateNewToken = (business) => {
    return jwt.sign({ sub: business.id, email: business.email }, config.jwkKey, {
        algorithm: 'HS256',
        expiresIn: '24h'
    })
};

export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.jwkKey, {
            algorithm: 'HS256'
        }, (err, payload) => {
            if (err) {
                reject(err);
            }
            resolve(payload);
        })
    })


}


