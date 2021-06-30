import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_DEVTO,
    headers: {
        Accept:'applications/json',
        'Content-Type': 'application/json'
    }
});

const get = async (path = '', param = {}) => {
    await instance.get(path, param)
        .then(res => res)
        .catch(err => console.error(err));
}

const post = async (path = '', param = {}) => {
    await instance.get(path, param)
        .then(res => res)
        .catch(err => console.error(err));
}

export { get, post};