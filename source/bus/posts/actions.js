// Types
import { FILL_POSTS, FETCH_POSTS_ASYNC, CREATE_POST, CREATE_POST_ASYNC } from './types';

// Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts
    }
};

export const createPost = (create) => {
    return {
        type: CREATE_POST,
        payload: create
    }
};

export const createPostAsync = (data) => async(dispatch, getState) => {
    dispatch({
        type: CREATE_POST_ASYNC,
    });

    const response = await api.create.fetch();
    const result = await response.json();
    result.data.comment = data;

    dispatch(createPost(result.data));
};

export const fetchPostsAsync = () => async(dispatch, getState) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};