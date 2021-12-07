import axios from "axios";

export const getRecords = () => {
    return axios.get('/api/records');
};

export const getRecord = (recordId) => {
    return axios.get(`/api/records/user/${recordId}`);
};

export const getUserRecords = (userId) => {
    return axios.get(`/api/records/${userId}`);
};

export const updateRecord = (record) => {
    return axios.get(`/api/records/${record.id}`, record);
};

export const deleteRecord = (recordId) => {
    return axios.get(`/api/records/${recordId}`);
};