import { ExpandMore } from '@material-ui/icons'
import React, { useState } from 'react'
import './DropDown.scss'

export interface DropdownOption {
    value: string
    label: string
}

interface DropDownProps {
    options: DropdownOption[]
    placeholder: string
    onChange: (value: DropdownOption) => void
    currentValue: string
}

function DropDown({ options, placeholder, onChange, currentValue }: DropDownProps) {
    const [isOptionsVisible, setIsOptionsVisible] = useState(false)

    const onSelectOption = (value: DropdownOption) => {
        onChange(value)
        setIsOptionsVisible(false)
    }

    const animateDropdownIconClass = isOptionsVisible ? 'c-dropdown__select-icon_isOpen' : 'c-dropdown__select-icon'
    return (
        <div>
            <div className='c-dropdown' onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
                <p>{currentValue ? currentValue : placeholder}</p>
                <ExpandMore style={{ color: '#3FBF9D' }} className={animateDropdownIconClass} />
            </div>
            {
                isOptionsVisible &&
                <ul className='c-dropdown__list'>
                    {options.map(option => (
                        <div className='c-dropdown__list-item'>
                            <li onClick={() => onSelectOption(option)}>{option.label}</li>
                        </div>
                    )
                    )}
                </ul>
            }
        </div >
    )
}

export default DropDown
