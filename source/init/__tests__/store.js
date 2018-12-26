// Core
import { createStore, combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Store
import { store } from '../store';

// Reducers
import { authReducer as auth } from '../../bus/auth/reducer';
import { uiReducer as ui } from '../../bus/ui/reducer';
import { postsReducer as posts } from '../../bus/posts/reducer';
import { profileReducer as profile } from '../../bus/profile/reducer';
import { usersReducer as users } from '../../bus/users/reducer';
import { formsReducer as forms } from '../../bus/forms/reducer';

const referenceRootReducer = combineReducers({
    auth,
    ui,
    posts,
    profile,
    users,
    router,
    forms,
});

const referenceStore = createStore(referenceRootReducer);

discribe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState())
    });
});
