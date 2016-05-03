import { connect } from 'react-redux'
import NewRelicPage from '../components/NewRelicPage'
import { loadData } from '../actions'

const NewRelicPageContainer = connect(
    (state, ownProps) => ({
        data: state.data
    }),
    (dispatch, ownProps) => ({
        initData: () => dispatch(loadData('new-relic'))
    })
)(NewRelicPage)

export default NewRelicPageContainer