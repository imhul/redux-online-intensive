// Types
import { types } from './types';

// Instruments
import { api } from '../../REST';

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type: types.FILL_POSTS,
            payload: posts
        }
    },

    createPost: (create) => {
        return {
            type: types.CREATE_POST,
            payload: create
        }
    },

    createPostAsync: (data) => {
        return {
            type: types.CREATE_POST_ASYNC,
            payload: data
        };
    },

    fetchPostsAsync: () => async (dispatch, getState) => {
        dispatch({
            type: types.FETCH_POSTS_ASYNC,
        });

        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(postsActions.fillPosts(result.data));
    },
}