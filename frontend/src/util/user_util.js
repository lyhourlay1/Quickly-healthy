import axios from "axios";

/** API fetchUser gets a user from the database, given the user id
 * @param {String} userId - The user id
 * @type {(userId: String)  => Promise}
 * @returns {Promise} - A promise of user
 */
export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`);
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