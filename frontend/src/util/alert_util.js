export const createAlert = (type, message) => {
    return new Promise((resolve, reject) => {
        if (!type) {
            reject({responseJSON: "No type was given"})
        } else if (!message) {
            reject({responseJSON: "No message was given"})
        } else {
            resolve({type: type, message: message})
        }
    })
}

export const deleteAlert = () => {
    return new Promise((resolve, reject) => {
        resolve({})
    })
}