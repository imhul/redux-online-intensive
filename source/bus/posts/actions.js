// Types
import { types } from './types';

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type: types.FILL_POSTS,
            payload: posts
        }
    },
    clearPosts: () => {
        return {
            type: types.CLEAR_POSTS,
        }
    },
    createPost: (post) => {
        return {
            type: types.CREATE_POST,
            payload: post
        }
    },
    removePost: (post) => {
        return {
            type: types.REMOVE_POST,
            payload: post
        }
    },
    createPostAsync: (post) => {
        return {
            type: types.CREATE_POST_ASYNC,
            payload: post
        };
    },
    removePostAsync: (post) => {
        return {
            type: types.REMOVE_POST_ASYNC,
            payload: post
        };
    },
    fetchPostsAsync: (posts) => {
       return {
            type: types.FETCH_POSTS_ASYNC,
            payload: posts
        };
    },
}