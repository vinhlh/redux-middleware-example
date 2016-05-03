import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'

const App = ({ children }) => (
    <div>
        <HeaderContainer />
        {children}
    </div>
)

export default App