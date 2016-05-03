const vlMiddleware = ({ dispatch, getState }) => {
    return next => action => {
        const { type, payload } = action;
        if (typeof payload.promise === 'object' && typeof payload.promise.then === 'function') {
            console.warn('Damnnnn it!!! You got a promise!!!');
        }

        if (typeof payload.request === 'string') {
            console.warn('Damnnnn it!!! You got a request!!!');
        }

        return next(action)
    }
}

export default vlMiddleware