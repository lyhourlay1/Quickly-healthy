import * as UserUtil from './../util/user_util'

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


export const fetchUser = userId => (dispatch) => {
    return UserUtil.fetchUser(userId).then(
        user => dispatch(receiveUser(user.data)),
        err => dispatch(receiveUserError(err.response.data))
    )
}


export const updateUserImage = (userId, image) => dispatch =>(
    UserUtil.updateUserImage(userId, image).then(
        image => dispatch(receiveUser({image: image})),
        err => dispatch(receiveUserError(err.response.data))
    )
)

export const updateUserFiles = (userId, files) => dispatch =>(
    UserUtil.updateUserFiles(userId, files).then(
        files => dispatch(receiveUser({files: files})),
        err => dispatch(receiveUserError(err.response.data))
    )
)


window.fetchUser = fetchUser;
window.updateUserImage = updateUserImage;
window.updateUserFiles = updateUserFiles;