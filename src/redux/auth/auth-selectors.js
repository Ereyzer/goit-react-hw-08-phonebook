export const getToken = ({ auth }) => auth.token;
export const getUser = ({ auth }) => auth.user;
export const getIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const getAuthError = ({ auth }) => auth.error;
export const getAuthLoading = ({ auth }) => auth.loading;
