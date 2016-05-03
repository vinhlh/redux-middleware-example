import * as configs from '../configs'

const REQUEST_SUFFIX = 'REQUEST';
const SUCCESS_SUFFIX = 'SUCCESS';
const ERROR_SUFFIX   = 'ERROR';

const requestMiddleware = ({ dispatch, getState }) => {
    return next => action => {
        const { type, payload, meta } = action;
        if (!payload || typeof payload.request !== 'string') {
            return next(action)
        }

        next({
            type: `${type}_${REQUEST_SUFFIX}`,
            payload: typeof payload.data !== 'undefined' ? payload.data : {},
            meta
        })

        fetch(configs.httpServer + payload.request)
            .then(
                response => response.json()
            )
            .then(
                result => next({
                    type: `${type}_${SUCCESS_SUFFIX}`,
                    payload: result,
                    meta
                })
            ).catch(
                error => next({
                    type: `${type}_${ERROR_SUFFIX}`,
                    error: true,
                    payload: error,
                    meta
                })
            )
    }
}

export default requestMiddleware