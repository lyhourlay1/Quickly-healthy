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


/** API fetchUserImage gets an image from the database, given the user id
 * @param {String} userId - The user id
 * @type {(userId: String)  => Promise}
 * @returns {Promise} - A promise of image
 */
export const fetchUserImage = (userId) => {
  return axios.get(`/api/users/${userId}/image`);
};


/** API fetchUserFiles gets files from the database, given the user id
 * @param {String} userId - The user id
 * @type {(userId: String)  => Promise}
 * @returns {Promise} - A promise of files
 */
export const fetchUserFiles = (userId) => {
  return axios.get(`/api/users/${userId}/files`);
};


/** API updateUserImage creates or updates a user's image in the database
 * @param {String} userId - The user's id
 * @param {Object} image - The image file
 * @type {(userId: String, image: Object)  => Promise}
 * @returns {Promise} - A promise of image
 */
export const updateUserImage = (userId, image) => {
  return axios.post(`/api/users/${userId}/image`, image)
}

/** API updateUserFiles creates or updates a user's files in the database
 * @param {String} userId - The user's id
 * @param {Object} files - The files
 * @type {(userId: String, files: Object)  => Promise}
 * @returns {Promise} - A promise of files
 */
export const updateUserFiles = (userId, files) => {
  return axios.post(`/api/users/${userId}/files`, files)
}