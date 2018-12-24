// Instruments
import { MAIN_URL, groupId } from './config';

// API
export const api = {
    get token() {
        return localStorage.getItem('token');
    },
    auth: {
        signup(userInfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
        },
        login(userInfo) {
            return fetch(`${MAIN_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
        },
        logout() {
            return fetch(`${MAIN_URL}/user/logout`, {
                method: 'GET',
                headers: {
                    Authorization: this.token,
                },
            });
        },
        authenticate() {
            return fetch(`${MAIN_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: this.token }),
            });
        },
    },
    posts: {
        fetch() {
            return fetch(`${MAIN_URL}/feed`, {
                method: 'GET',
                headers: {
                    Authorization: this.token,
                },
            })
        },
        create(comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method: 'POST',
                headers: {
                    Authorization: this.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            });
        },
        remove(postId) {
            return fetch(`${MAIN_URL}/feed/${postId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: this.token,
                },
            });
        },
        like(postId) {
            return fetch(`${MAIN_URL}/feed/like/${postId}`, {
                method: 'PUT',
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
    profile: {
        updateProfile(profileInfo) {
            return fetch(`${MAIN_URL}/user`, {
                method: 'PUT',
                headers: {
                    Authorization: this.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ profileInfo }),
            });
        },
        updateAvatar(avatar) {
            return fetch(`${MAIN_URL}/image`, {
                method: 'POST',
                headers: {
                    Authorization: this.token,
                },
                body: avatar,
            });
        },
    },
    users: {
        fetch() {
            return fetch(`${MAIN_URL}/user/all`, {
                method: 'GET',
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
};
