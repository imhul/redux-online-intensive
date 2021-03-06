// Types
import {types} from './types';

export const uiActions = {
    startFetching: () => {
        return {
            type: types.START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.STOP_FETCHING,
        };
    },
    emitError: (error, message) => {
        return {
            type: types.ERROR,
            payload: message,
        }
    },
    setOnlineState: () => {
        return {
            type: types.SET_ONLINE_STATE,
        };
    },
    setOfflineState: () => {
        return {
            type: types.SET_OFFLINE_STATE,
        };
    },
};