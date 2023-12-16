import React, { useState } from 'react'
import './Navbar.css'

import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [navBtn, setNavBtn] = useState(false)

    const toggleBtn = () => {
        setNavBtn(navbtn => !navbtn)
    }

    let toggleClass = navBtn ? ' active' : ''

    return (
        <div className='navbar-container'>
            <div className="navbar-logo">

                <h1>Track My Cart</h1>
            </div>
            <div className='navbar-toggle-container' onClick={toggleBtn}>
                <span className="navbar-toggle"></span>
                <span className="navbar-toggle"></span>
                <span className="navbar-toggle"></span>
            </div>
            <div className={`navbar-right${toggleClass}`}>

                {isAuthenticated && <p>{user.name}</p>}
                <div className={`navbar-button ${isAuthenticated ? "" : "not-signed"}`}>
                    {
                        isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button> : <button onClick={() => loginWithRedirect()}>Log In</button>
                    }
                </div>



            </div>

        </div>
    )
}

export default Navbar