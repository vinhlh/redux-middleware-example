import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'
import initState from './store/initState'
import routes from './routes'
import Root from './containers/Root'

const store = configureStore(initState)
const history = syncHistoryWithStore(browserHistory, store)

// super simple Promise action example
store.dispatch({
    type: 'VL_PROMISE',
    payload: {
        promise: new Promise(function(resolve, reject) {
            setTimeout(function() {
                if (Math.random() > 0.5) {
                    resolve('Ok')
                } else {
                    reject('Durex');
                }
            }, 1000);
        })
    }
})

store.dispatch({
    type: 'VL_REQUEST',
    payload: {
        request: 'http://localhost:8888/data/new-relic'
    }
})

ReactDOM.render(
    <Root store={store} history={history} routes={routes} />,
    document.getElementById('root')
)