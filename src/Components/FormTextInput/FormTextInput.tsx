import React, { ChangeEvent } from 'react'

interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    placeholder: string;
}

function FormTextInput({value, onChange, label, placeholder}: InputProps) {
    return (
        <div>
            <span>{label}</span>
    <input placeholder={placeholder} onChange={onChange} value={value}></input>
        </div>
    )
}

export default FormTextInput
