import React from 'react';
import './Header.scss';

export default function Header() {
    return (
        <div className="header__container">
            <h3 className="header__small-title">Find my </h3> 
            <h1 className="header__big-title">Doppelganger<span style={{color: "#FCEA2B"}}>.</span></h1> 
        </div>
    )
}

