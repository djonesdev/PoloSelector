import React from 'react'
import './Button.scss'

interface ButtonProps {
    text: string
    onClick: () => void
    style: string
    disabled?: boolean
}
function Button({ text, onClick, style, disabled }: ButtonProps) {
    return (
        <div>
            <button disabled={disabled} className={`c-button c-button__disabled-${disabled}`} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button
