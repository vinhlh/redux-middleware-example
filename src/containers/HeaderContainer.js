import React from 'react'
import { connect } from 'react-redux'
import Header  from '../components/Header'

const HeaderContainer = connect(
    // have to pass 2nd param for LinkActive to works
    (state, ownProps) => ({
        menuItems: state.menuItems
    })
)(Header)

export default HeaderContainer