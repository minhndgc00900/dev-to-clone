import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_DEVTO,
    headers: {
        Accept:'applications/json',
        'Content-Type': 'application/json'
    }
});

// instance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

const getRequest = (path = '', param = {}) => {
    return instance.get(path, param)
        .then(res => res)
        .catch(err => Promise.reject(err.response ? err.response.data : err));
}

const postRequest = (path = '', param = {}) => {
    return instance.get(path, param)
        .then(res => res)
        .catch(err => Promise.reject(err.response ? err.response.data : err));
}

export const requestService = { getRequest, postRequest };