import React from 'react';
import '../../App.css';

const Header = (props) => {
    return (
        <div className="header">
            <h2>I'm the header! I'm {props.pageName}</h2>
        </div>
    )
}

export default Header;