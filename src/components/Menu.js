import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Menu = ({ items }) => (
    <ul>
        {
            items.map(({ link, name, index }) => (
                <li key={link}>
                    <Link to={`${link}`} activeStyle={{color: 'red'}} onlyActiveOnIndex={!!index}>
                        {name}
                    </Link>
                </li>
            ))
        }
    </ul>
)

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        index: PropTypes.bool
    })).isRequired
}

export default Menu