import React from 'react'
import './Button.scss'

interface ButtonProps {
    text: string
    onClick: () => void
    style: string
}
function Button({text, onClick, style}: ButtonProps) {
    return (
        <div>
            <button className='c-button' onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button
