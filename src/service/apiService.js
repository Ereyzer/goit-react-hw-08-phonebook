import axios from 'axios';
const BASE_URL = 'http://localhost:4040/contacts';

const getContacts = () =>
  axios
    .get(BASE_URL)
    .then(r => r)
    .catch(console.log);

const deleteContact = id =>
  axios({
    method: 'delete',
    url: `${BASE_URL}/${id}`,
  });
// .then(r => r)
// .catch(console.log);

const setContacts = data => {
  return axios.post(BASE_URL, { data });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getContacts, setContacts, deleteContact };
