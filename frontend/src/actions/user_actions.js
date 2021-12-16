import * as UserUtil from './../util/user_util'
import * as SessionUtil from './../util/session_api_util'

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERROR = "RECEIVE_USER_ERROR";


const receiveUser = user =>({
    type: RECEIVE_USER,
    user: user
})

const receiveUserError = error =>({
    type: RECEIVE_USER_ERROR,
    error: error
})


/*    Separation      */


/** API fetchCurrentUser gets the current user from the database
 * @type {()  => (dispatch) => Promise<User>}
 * @returns {(dispatch) => Promise<User>} - A redux dispatch promise of user
 * @example
 *  fetchCurrentUser()(store.dispatch)
 */
export const fetchCurrentUser = () => (dispatch) => (
    SessionUtil.currentUser().then(
        user => dispatch(receiveUser(user.data)),
        err => dispatch(receiveUserError(err.response.data))
    )
)


/** API fetchUser gets a user from the database, given the user id
 * @param {String} userId - The user id
 * @type {(userId: String)  => (dispatch) => Promise}
 * @returns {(dispatch) => Promise} - A redux dispatch promise of user
 * @example
 *  fetchUser(user.id)(store.dispatch)
 */
export const fetchUser = userId => (dispatch) => (
    SessionUtil.fetchUser(userId).then(
        user => dispatch(receiveUser(user.data)),
        err => dispatch(receiveUserError(err.response.data))
    )
)

/** API fetchUser gets a user from the database, given the user id
 * @param {Object} user - The user id
 * @type {(user: Object)  => (dispatch) => Promise}
 * @returns {(dispatch) => Promise} - A redux dispatch promise of user
 * @example
 *  updateUser(user)(store.dispatch)
 */
export const updateUser = user => (dispatch) => (
    UserUtil.updateUser(user).then(
        user => dispatch(receiveUser(user.data)),
        err => dispatch(receiveUserError(err.response.data))
    )
)


/** API updateUserImage creates or updates a user's profile image from the database and state
 * @param {String} userId - The user's id
 * @param {Object} image - The profile image
 * @type {(userId: String, image: Object)  => (dispatch) => Promise}
 * @returns {(dispatch) => Promise} - A redux dispatch promise of image
 * @example
 *  updateUserImage(user.id, image)(store.dispatch)
 */
export const updateUserImage = (userId, image) => dispatch =>(
    UserUtil.updateUserImage(userId, image).then(
        image => dispatch(receiveUser({image: image.data})),
        err => dispatch(receiveUserError(err.response.data))
    )
)


/** API updateUserFiles creates or updates a user's files image from the database and state
 * @param {String} userId - The user's id
 * @param {Object} files - The files
 * @type {(userId: String, files: Object)  => (dispatch) => Promise}
 * @returns {(dispatch) => Promise} - A redux dispatch promise of files
 * @example
 *  updateUserFiles(user.id, files)(store.dispatch)
 */
export const updateUserFiles = (userId, files) => dispatch =>(
    UserUtil.updateUserFiles(userId, files).then(
        files => dispatch(receiveUser({files: files.data})),
        err => dispatch(receiveUserError(err.response.data))
    )
)


window.fetchUser = fetchUser;
window.updateUserImage = updateUserImage;
window.updateUserFiles = updateUserFiles;