import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div>
            <h1>Welcome to the landing page!</h1>
            <Link to='getting-started'> Click this link to get started!</Link>
        </div>
    )
}

export default LandingPage
