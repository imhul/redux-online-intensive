// Types
import { types } from './types';

// Instruments
// import { api } from '../../REST';

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
    fetchPostsAsync: (posts) => {
       return {
            type: types.FETCH_POSTS_ASYNC,
            payload: posts
        };
    },
}