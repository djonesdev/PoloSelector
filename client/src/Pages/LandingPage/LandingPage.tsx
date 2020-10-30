import React from 'react'
import { Link } from 'react-router-dom'

import PoloLogo from '../../assets/Icons/poloLogo.jpg'

function LandingPage() {
    return (
        <div className='u-flex--centered-column'>
            <h1>Welcome to the landing page!</h1>
            <img src={PoloLogo} />
            <p>Answer a few simple questions and i'll try to guess your polo ASAP!</p>
            <Link className='c-button u-flex u-flex--justify-center u-flex--align-center u-decoration-none' to='getting-started'>Lets Get Started</Link>
        </div>
    )
}

export default LandingPage
