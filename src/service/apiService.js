import axios from 'axios';
const BASE_URL = 'http://localhost:4040/contacts';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:4040/contacts';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const getContacts = () => axios.get();

const deleteContact = id => axios.delete(`/${id}`);

const setContacts = data => axios.post('/', { data });

const signup = userInfo =>
  axios
    .post('/users/signup', userInfo)
    .then(({ data }) => {
      token.set(data.token);
      return data;
    })
    .catch(console.log);

const login = userInfo =>
  axios
    .post('/users/login', userInfo)
    .then(({ data }) => {
      token.set(data.token);
      return data;
    })
    .catch(console.log);

const getUserInfo = () =>
  axios
    .get('/users/current')
    .then(r => r)
    .catch(console.log);

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
};
