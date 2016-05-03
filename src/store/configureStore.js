import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import promiseMiddleware from '../middlewares/promiseMiddleware'
import vlMiddleware from '../middlewares/vlMiddleware'
import requestMiddleware from '../middlewares/requestMiddleware'
import cacheMiddleware from '../middlewares/cacheMiddleware'

export default function configureStore(initState) {
    const store = createStore(
        rootReducer,
        initState,
        compose(
            applyMiddleware(
                thunk,
                vlMiddleware,
                cacheMiddleware,
                requestMiddleware,
                promiseMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default))
    }

    return store
}