// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fetchPosts({ payload: feed }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch, [feed]);
        const { data: posts, message } = yield apply(response, response.json);

        if( response.status !== 200 ) {
            throw new Error(message);
        }

        yield put(postsActions.fillPosts(posts));

    } catch (error) {
        console.log("fetchPosts worker: ", error);
    } finally {
        yield put(uiActions.stopFetching());
    }

}