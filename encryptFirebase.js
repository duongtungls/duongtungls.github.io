const fs = require('fs');
const CryptoJS = require("crypto-js");
require('dotenv').config();

const env = process.env;

const firebaseJsonPath = "./src/firebase.json";
const firebaseEncryptedPath = "./src/firebase.enc.json";
if (fs.existsSync(firebaseJsonPath)) {

  if (!env.REACT_APP_CIPHER_SECRET) {
    console.error(`env file doesn't have valid REACT_APP_CIPHER_SECRET value`);
    return;
  }
  let json = JSON.parse(fs.readFileSync(firebaseJsonPath, 'utf8'));

  console.log('encrypt with key', env.REACT_APP_CIPHER_SECRET)

  fs.writeFileSync(firebaseEncryptedPath, JSON.stringify(encryptJson(json), null, 2), 'utf8');

  console.log('Successful encrypt');
} else {
  console.error(`Error: File ${firebaseJsonPath} not exist`)
}

function encryptJson(json) {
  let keys = Object.keys(json);
  let result = {};
  keys.map(function (key) {
    let value = json[key];
    result[encrypt(key)] = encrypt(value);
  })
  return result;
}

function encrypt(value) {
  let ciphertext = CryptoJS.AES.encrypt( value , env.REACT_APP_CIPHER_SECRET.toString());
  return ciphertext.toString();
}

function toHexString(byteArray) {
  return Array.from(byteArray, function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
}