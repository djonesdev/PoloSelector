import React, { useState, ChangeEvent } from 'react'
import FormTextInput from '../../Components/FormTextInput/FormTextInput'
import { AccountCircleRounded } from '@material-ui/icons';
import Button from '../../Components/Button/Button';

interface StartedProps {
    dateValue: string
    onChangeDate: (e: ChangeEvent<HTMLInputElement>) => void
}

function GettingStarted({dateValue, onChangeDate}: StartedProps) {
    return (
        <div className='u-width-100 u-flex u-flex--justify-center u-flex--align-center u-flex--column'>
            <h1>Lets get started!</h1>
            <p>enter you cars year below</p>
            <div style={{ width: '80vw' }}>
                <FormTextInput placeholder='What year was your polo produced?' onChange={e => onChangeDate(e)} value={dateValue} Icon={AccountCircleRounded}/>
            </div>
            <Button style='primary' text='enter search' onClick={() => console.log('clicked button')}/>
        </div>
    )
}

export default GettingStarted
