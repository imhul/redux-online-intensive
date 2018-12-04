import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from './rootReducer';

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () =>     '#138bfe',
        prevState: () => '#1c5faf',
        action: () =>    '#149945',
        nextState: () => '#a47104',
        error: () =>     '#ff0005'
    }
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composerEnchancer = devtools ? devtools : compose;
const enhancedStore = composerEnchancer( applyMiddleware( logger ) );

export const store = createStore( rootReducer, enhancedStore );
