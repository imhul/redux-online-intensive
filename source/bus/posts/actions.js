// Types
import { FILL_POSTS, FETCH_POSTS_ASYNC, CREATE_POST_ASYNC } from './types';

// Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts
    };
};

export const createPostAsync = (post) => async(dispatch, getState) => {
    dispatch({
        type: CREATE_POST_ASYNC,
        payload: post
    });

    // const response = await api.posts.fetch();
    // const result = await response.json();
    // dispatch(fillPosts(result.data));
};

export const fetchPostsAsync = () => async(dispatch, getState) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    // console.log("response: ", response);
    // console.log("result: ", result);
    dispatch(fillPosts(result.data));
};