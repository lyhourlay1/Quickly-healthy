import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = (userData) => {
  return axios.post("https://quickly-healthy-fe.onrender.com/api/users/register", userData);
};

export const login = (userData) => {
  const rq = axios.post("https://quickly-healthy-fe.onrender.com/api/users/login", userData);
  rq.then(res => console.log(res))
  return rq
};


/** API currentUser gets the current user information
 * @type {()  => Promise<User>}
 * @returns {Promise<User>} - A promise of user
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const currentUser = () => {
  return axios.get("https://quickly-healthy-fe.onrender.com/api/users/current");
}

/** API fetchUser gets a user information
 * @param userId - The user id
 * @type {(userId: String)  => Promise<User>}
 * @returns {Promise<User>} - A promise of user
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const fetchUser = userId => {
  return axios.get(`https://quickly-healthy-fe.onrender.com/api/users/${userId}`);
}

window.currentUser = currentUser;
window.fetchUser = fetchUser;