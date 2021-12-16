import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = (userData) => {
  return axios.post("/api/users/register", userData);
};

export const login = (userData) => {
  return axios.post("/api/users/login", userData);
};


/** API currentUser gets the current user information
 * @type {()  => Promise<User>}
 * @returns {Promise<User>} - A promise of user
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const currentUser = () => {
  return axios.get("/api/users/current");
}

/** API fetchUser gets a user information
 * @param userId - The user id
 * @type {(userId: String)  => Promise<User>}
 * @returns {Promise<User>} - A promise of user
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 */
export const fetchUser = userId => {
  return axios.get(`/api/users/${userId}`);
}

window.currentUser = currentUser;
window.fetchUser = fetchUser;