import { GET_STORE_INFO_STARTED, GET_STORE_INFO_SUCCESS, GET_STORE_INFO_FAILED,
    UPDATE_STORE_INFO_STARTED, UPDATE_STORE_INFO_SUCCESS, UPDATE_STORE_INFO_FAILED, getStoreInfoViaAPI } from '../actions/information.action';


import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('[Async Action] GET_STORE_INFO_STARTED', () => {
    const store = mockStore({ });
    return store.dispatch(getStoreInfoViaAPI()).then(() => {
    expect(store.getActions().filter(action => action.type === GET_STORE_INFO_STARTED).length).toEqual(1)
    })
});

test('[Async Action] GET_STORE_INFO_SUCCESS', () => {
    const store = mockStore({ });
    return store.dispatch(getStoreInfoViaAPI()).then(() => {
    expect(store.getActions().filter(action => action.type === GET_STORE_INFO_SUCCESS).length).toEqual(1)
    })
});

test('[Async Action] GET_STORE_INFO_FAILED', () => {
    const store = mockStore({ });
    return store.dispatch(getStoreInfoViaAPI()).then(() => {
    expect(store.getActions().filter(action => action.type === GET_STORE_INFO_FAILED).length).toEqual(1)
    })
});

test('[Async Action] UPDATE_STORE_INFO_STARTED', () => {
    const store = mockStore({ });
    return store.dispatch(getStoreInfoViaAPI()).then(() => {
    expect(store.getActions().filter(action => action.type === UPDATE_STORE_INFO_STARTED).length).toEqual(1)
    })
});

test('[Async Action] UPDATE_STORE_INFO_SUCCESS', () => {
    const store = mockStore({ });
    return store.dispatch(getStoreInfoViaAPI()).then(() => {
    expect(store.getActions().filter(action => action.type === UPDATE_STORE_INFO_SUCCESS).length).toEqual(1)
    })
});

test('[Async Action] UPDATE_STORE_INFO_FAILED', () => {
    const store = mockStore({ });
    return store.dispatch(getStoreInfoViaAPI()).then(() => {
    expect(store.getActions().filter(action => action.type === UPDATE_STORE_INFO_FAILED).length).toEqual(1)
    })
});