import React from 'react'
import Menu from './Menu'


const Header = ({ menuItems }) => (
    <div>
        <h1>PerfDashboard</h1>
        <Menu items={menuItems} />
    </div>
)

export default Header