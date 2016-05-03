import * as actionTypes from '../constants/actionTypes'

export const loadData = (dataProvider) => ({
    type: actionTypes.LOAD_DATA,
    payload: {
        request: `/data/${dataProvider}`
    },
    meta: {
        provider: dataProvider
    }
})

