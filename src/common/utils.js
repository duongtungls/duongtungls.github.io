import firebaseJson from "../firebase.enc.json";

const CryptoJS = require("crypto-js");

require('dotenv').config()
const env = process.env;

export const convertSnakeCase = (value) => {
  return value.replace(/(?:^|\.?)([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "").replace(" ", "_")
}

/*
export const encryptEnv = () => {
  let keys = Object.keys(firebaseJson);
  keys.map(key => {
    let value = firebaseJson[key]
    let ciphertext = CryptoJS.AES.encrypt( value , env.REACT_APP_CIPHER_SECRET).toString();
  })
}
*/

export const decrypt = (value) => {
  let bytes  = CryptoJS.AES.decrypt(value , env.REACT_APP_CIPHER_SECRET);
  // let bytes  = CryptoJS.AES.decrypt(value , "9mY#zu6%g57$EKS");
  // let plaintext = bytes.toString(CryptoJS.enc.Utf8);
  let plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext
}

export const getFirebaseConfig = () => {
  let keys = Object.keys(firebaseJson);
  let newFirebase = {};
  keys.map((item, index) => {
    let decryptKey = decrypt(item);
    newFirebase[decryptKey] = decrypt(firebaseJson[item]);
  })
  return newFirebase;
}