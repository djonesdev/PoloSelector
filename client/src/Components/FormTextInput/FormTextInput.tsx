import React, { ChangeEvent } from 'react'
import './FormTextInputStyles.scss'

interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    Icon: any;
    placeholder: string;
}

function FormTextInput({value, onChange, Icon, placeholder}: InputProps) {
    const currentColor = value.length ? 'lime' : 'red'
    return (
        <div className='c-form-input'>
            <Icon className='c-form-input__icon' style={{ color: currentColor }}/>
            <input className='c-form-input__input' placeholder={placeholder} onChange={onChange} value={value}></input>
        </div>
    )
}

export default FormTextInput
