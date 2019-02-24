import { SubmissionError } from 'redux-form';
import axios from "axios";
import qs from 'qs';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const submitSendEmail = (values) => {
  /*  return sleep(1000).then(() => {
      // simulate server latency
      if (!['john', 'paul', 'george', 'ringo'].includes(values.name)) {
        throw new SubmissionError({
          name: 'User does not exist',
          _error: 'Login failed!'
        })
      } else if (values.password !== 'redux-form') {
        throw new SubmissionError({
          password: 'Wrong password',
          _error: 'Login failed!'
        })
      } else {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      }
    })*/
  sendMessage(values.email, values.name, values.message);
}

const sendMessage = ( email, name, message) => {
  const data = {
    email,
    name,
    message
  };

  const url = `${process.env.REACT_APP_API_URL}/contact`
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data,
    url,
  };
  axios(options)
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      // console.log(error);
    });
}