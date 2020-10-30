import React from 'react'

import SadFace from '../../assets/Icons/sadFace.png'

function NoPageFound() {
    return (
        <div>
            <p>Sorry, no page found :(</p>
            <img src={SadFace} />
        </div>
    )
}

export default NoPageFound
