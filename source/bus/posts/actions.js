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
    removePost: (postId) => {
        return {
            type: types.REMOVE_POST,
            payload: postId
        }
    },
    likePost: (postId) => {
        return {
            type: types.LIKE_POST,
            payload: postId
        }
    },
    unlikePost: (postId) => {
        return {
            type: types.UNLIKE_POST,
            payload: postId
        }
    },
    createPostAsync: (post) => {
        return {
            type: types.CREATE_POST_ASYNC,
            payload: post
        };
    },
    removePostAsync: (postId) => {
        return {
            type: types.REMOVE_POST_ASYNC,
            payload: postId
        };
    },
    fetchPostsAsync: (posts) => {
       return {
            type: types.FETCH_POSTS_ASYNC,
            payload: posts
        };
    },
    likePostAsync: (postId) => {
       return {
            type: types.LIKE_POST_ASYNC,
            payload: postId
        };
    },
    unlikePostAsync: (postId) => {
       return {
            type: types.UNLIKE_POST_ASYNC,
            payload: postId
        };
    },
}