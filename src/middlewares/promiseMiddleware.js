// the Redux action objects should follow the FSA standard:
// https://github.com/acdlite/flux-standard-action
//
// Usage:
// dispatch({
//     type: 'SUPER_COOL_ACTION',
//     payload: {
//         promise: new Promise()
//     }
// })
//

const PENDING_SUFFIX    = 'PENDING';
const FULLFILLED_SUFFIX = 'FULLFILLED';
const REJECTED_SUFFIX   = 'REJECTED';

const promiseMiddleware = ({ dispatch, getState }) => {
    return next => action => {
        const { type, payload } = action;

        if (!payload || typeof payload.promise !== 'object' || typeof payload.promise.then !== 'function') {
            return next(action)
        }

        // first, dispatch `PENDING` action
        next({
            type: `${type}_${PENDING_SUFFIX}`,
            payload: typeof payload.data !== 'undefined' ? payload.data : {}
        })

        payload.promise.then( // dispatch `FULLFILLED` action
            result => next({
                type: `${type}_${FULLFILLED_SUFFIX}`,
                payload: result
            })
        ).catch( // dispatch `REJECTED` action
            error => next({
                type: `${type}_${REJECTED_SUFFIX}`,
                error: true,
                payload: error
            })
        )
    }
}

export default promiseMiddleware