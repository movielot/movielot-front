import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const get = (url, requestParams, successCB, failCB = () => {}) => {
  instance
    .get(url, { params: requestParams })
    .then((response) => {
      successCB(response.data);
    })
    .catch((error) => {
      if (failCB) {
        failCB(error);
      }
    });
};

export { get };
