import mockService from '../service/mock.service';

export const GET_STORE_INFO_STARTED = 'GET_STORE_INFO_STARTED';
export const GET_STORE_INFO_SUCCESS = 'GET_STORE_INFO_SUCCESS';
export const GET_STORE_INFO_FAILED = 'GET_STORE_INFO_FAILED';
export const UPDATE_STORE_INFO_STARTED = 'UPDATE_STORE_INFO_STARTED';
export const UPDATE_STORE_INFO_SUCCESS = 'UPDATE_STORE_INFO_SUCCESS';
export const UPDATE_STORE_INFO_FAILED = 'UPDATE_STORE_INFO_FAILED';

// GET ACTION
const getStoreInfoStarted = () => ({ type: GET_STORE_INFO_STARTED });
const getStoreInfoSuccess = (store) => ({
    type: "GET_STORE_INFO_SUCCESS",
    payload: { ...store }
});
const getStoreFailure = error => ({
    type: GET_STORE_INFO_FAILED,
    payload: {
        error
    }
});

// UPDATE ACTION
const updateStoreInfoStarted = () => ({ type: UPDATE_STORE_INFO_STARTED });
const updateStoreInfoSuccess = (store) => ({
    type: "UPDATE_STORE_INFO_SUCCESS",
    payload: { ...store }
});
const updateStoreFailure = error => ({
    type: UPDATE_STORE_INFO_FAILED,
    payload: {
        error
    }
});

export const getStoreInfoViaAPI = () => {
    return dispatch => {
        dispatch(getStoreInfoStarted());
        mockService.getInformation()
            .then(({data}) => {
                dispatch(getStoreInfoSuccess(data.store));
            })
            .catch(err => {
            dispatch(getStoreFailure(err.message));
        });
    }
}

export const updateStoreInfoViaAPI = (data) => {
    return dispatch => {
        dispatch(updateStoreInfoStarted());
        mockService.postInformation(data)
            .then(res => {
                data.store = JSON.parse(res.config.data);
                dispatch(updateStoreInfoSuccess(data.store));
            })
            .catch(err => {
            dispatch(updateStoreFailure(err.message));
        });
    }
}


