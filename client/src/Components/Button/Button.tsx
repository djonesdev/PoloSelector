import React from 'react'
import './Button.scss'

interface ButtonProps {
    text: string
    onClick: () => void
    style: string
    disabled?: boolean
    className?: string
}
function Button({ className, text, onClick, disabled }: ButtonProps) {
    return (
        <div>
            <button disabled={disabled} className={`c-button c-button__disabled-${disabled} ${className}`} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button
