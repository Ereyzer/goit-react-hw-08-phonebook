export const initialState = {
  auth: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error: null,
    loading: false,
  },
  contacts: {
    items: [],
    filter: '',
    error: null,
    loading: false,
  },
};
