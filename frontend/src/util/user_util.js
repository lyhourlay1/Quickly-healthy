import axios from "axios";

/** API fetchUser gets a user from the database, given the user id
 * @param {String} userId - The user id
 * @type {(userId: String)  => Promise<User>}
 * @returns {Promise<User>} - A promise of user
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 * @example
    fetchUser(user.id)(store.dispatch)
 */
export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`);
};


/** API fetchUserImage gets an image from the database, given the user id
 * @param {String} userId - The user id
 * @type {(userId: String)  => Promise<User>}
 * @returns {Promise<User>} - A promise of image
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 * @example
    fetchUserImage(user.id)
 */
export const fetchUserImage = (userId) => {
    return axios.get(`/api/users/${userId}/image`);
};


/** API fetchUserFiles gets files from the database, given the user id
 * @param {String} userId - The user id
 * @type {(userId: String)  => Promise<User>}
 * @returns {Promise<User>} - A promise of files
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 * @example
    fetchUserFiles(user.id)
 */
export const fetchUserFiles = (userId) => {
    return axios.get(`/api/users/${userId}/files`);
};


/** API updateUserImage creates or updates a user's image in the database
 * @param {String} userId - The user's id
 * @param {Object} image - The image file
 * @type {(userId: String, image: Object)  => Promise<User>}
 * @returns {Promise<User>} - A promise of image
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 * @example
    updateUserImage(user.id, {
        "name": "easter-egg.png",
        "data": "iVBORw0K...kSuQmCC",
        "size": 7143,
        "encoding": "7bit",
        "tempFilePath": "",
        "truncated": false,
        "mimetype": "image/png",
        "md5": "323c01c696523119d251844e4ec52678"})
 */
export const updateUserImage = (userId, image) => {
    return axios.post(`/api/users/${userId}/image`, image)
}

/** API updateUserFiles creates or updates a user's files in the database
 * @param {String} userId - The user's id
 * @param {Object} files - The files
 * @type {(userId: String, files: Object)  => Promise<User>}
 * @returns {Promise<User>} - A promise of files
 * @see {@link https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/tutorials/routes.md|Tutorials}
 * @example
    fetchUserFiles(user.id, {
        "file1": {
            "name": "file.txt",
            "data": "dGhpcyBpcyBmcm9tIGEgdGV4dCBmaWxl",
            "size": 24,
            "encoding": "7bit",
            "tempFilePath": "",
            "truncated": false,
            "mimetype": "text/html",
            "md5": "da2274dc28a9d7ea4034e93932b6db25"}})
 */
export const updateUserFiles = (userId, files) => {
    return axios.post(`/api/users/${userId}/files`, files)
}