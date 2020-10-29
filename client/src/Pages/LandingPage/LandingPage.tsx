import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div className='u-width-100 u-flex u-flex--justify-center u-flex--align-center u-flex--column'>
            <h1>Welcome to the landing page!</h1>
            <Link className='c-button u-flex u-flex--justify-center u-flex--align-center u-decoration-none' to='getting-started'> Click this link to get started!</Link>
        </div>
    )
}

export default LandingPage
