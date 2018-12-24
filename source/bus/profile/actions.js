// Types
import {types} from './types';
import { newPassword } from './../forms/shapes';

export const profileActions = {
    // Sync
    fillProfile: (profile) => {
        return {
            type: types.FILL_PROFILE,
            payload: profile,
        };
    },
    clearProfile: () => {
        return {
            type: types.CLEAR_PROFILE,
        };
    },
    updateAvatar: (newAvatarUrl) => {
        return {
            type: types.UPDATE_AVATAR,
            payload: newAvatarUrl,
        }
    },
    updatePassword: (newPassword) => {
        return {
            type: types.UPDATE_PASSWORD,
            payload: newPassword,
        }
    },

    // Async
    updateNameAsync: (newName) => {
        return {
            type: types.UPDATE_NAME_ASYNC,
            payload: newName,
        }
    },
    updateAvatarAsync: (newAvatar) => {
        return {
            type: types.UPDATE_AVATAR_ASYNC,
            payload: newAvatar,
        }
    },
    updatePasswordAsync: (newPass) => {
        return {
            type: types.UPDATE_PASSWORD_ASYNC,
            payload: newPass,
        }
    },
};