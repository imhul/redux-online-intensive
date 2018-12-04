// Types
import { FILL_POSTS, FETCH_POSTS_ASYNC } from './types';

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts
    }
};

export const fetchPosts = () => {
    return {
        type: FETCH_POSTS_ASYNC
    }
};