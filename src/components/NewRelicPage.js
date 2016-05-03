import React, { Component, PropTypes } from 'react'

class NewRelicPage extends Component {
    propTypes: {
        initData: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.initData()
    }
    render() {
        const data = this.props.data['new-relic']
        return (
            <div>
                NewRelicPage
                { JSON.stringify(data) }
            </div>
        )
    }
}

export default NewRelicPage