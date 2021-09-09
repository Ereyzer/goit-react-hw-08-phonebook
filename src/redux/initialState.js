export const initialState = {
  auth: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  contacts: {
    items: [],
    filter: '',
    error: null,
    loading: false,
  },
};
