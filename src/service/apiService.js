import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const getContacts = () => axios.get('/contacts');

const deleteContact = id => axios.delete(`/contacts/${id}`);

const setContacts = data => axios.post('/contacts', data);

const signup = userInfo => {
  return axios.post('/users/signup', userInfo).then(({ data }) => {
    token.set(data.token);
    return data;
  });
};

const login = userInfo =>
  axios.post('/users/login', userInfo).then(({ data }) => {
    token.set(data.token);
    return data;
  });

const getUserInfo = tokenUser => {
  token.set(tokenUser);
  return axios.get('/users/current');
};

const logout = () =>
  axios.post('/users/logout').then(r => {
    token.unset();
    return r;
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getContacts,
  setContacts,
  deleteContact,
  signup,
  login,
  getUserInfo,
  logout,
  token,
};
