import * as configs from '../configs'

const SUCCESS_SUFFIX = 'SUCCESS';

// handle caching for fetching data
const cacheMiddleware = ({ dispatch, getState }) => {
    return next => action => {
        const { type, payload, meta } = action,
            { data } = getState()

        if (!payload
            || typeof payload.request !== 'string'
            || typeof meta.provider !== 'string'
            || typeof data[meta.provider] === 'undefined') {
            return next(action)
        }

        next({
            type: `${type}_${SUCCESS_SUFFIX}`,
            payload: data[meta.provider],
            meta: {
                ...meta,
                cache: true
            }
        })
    }
}

export default cacheMiddleware
