// Core
import { put, apply } from 'redux-saga/effects';
import { replace } from "react-router-redux";
import { actions } from 'react-redux-form';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';
import { book } from "../../../../navigation/book";

export function* updatePassword({ payload: {
    oldPassword,
    newPassword,
} }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [
            {
                oldPassword,
                newPassword,
            }
        ]);

        const { data: updatedPassword, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(updatedPassword));
    } catch (error) {
        yield put(uiActions.emitError("updatePassword worker error", error));
    } finally {
        yield put(uiActions.stopFetching());
        yield put(replace(book.profile));
    }

};
