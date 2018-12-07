// Types
import { types } from './types';

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
    createPostAsync: (post) => {
        return {
            type: types.CREATE_POST_ASYNC,
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