const REQUEST_SUFFIX = 'REQUEST';
const SUCCESS_SUFFIX = 'SUCCESS';
const ERROR_SUFFIX   = 'ERROR';

const requestMiddleware = ({ dispatch, getState }) => {
    return next => action => {
        const { type, payload } = action;
        if (typeof payload.request !== 'string') {
            return next(action)
        }

        next({
            type: `${type}_${REQUEST_SUFFIX}`,
            payload: typeof payload.data !== 'undefined' ? payload.data : {}
        })

        fetch(payload.request)
            .then(
                response => response.json()
            )
            .then(
                result => next({
                    type: `${type}_${SUCCESS_SUFFIX}`,
                    payload: result
                })
            ).catch(
                error => next({
                    type: `${type}_${ERROR_SUFFIX}`,
                    error: true,
                    payload: error
                })
            )
    }
}

export default requestMiddleware