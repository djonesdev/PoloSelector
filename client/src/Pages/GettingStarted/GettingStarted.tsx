import React, { useState, ChangeEvent } from 'react'
import { AccountCircleRounded, ExpandMore } from '@material-ui/icons'

import FormTextInput from '../../Components/FormTextInput/FormTextInput'
import { Cars } from '../../redux/actions/actionTypes'
import Button from '../../Components/Button/Button'
import './GettingStarted.scss'
import DropDown, { DropdownOption } from '../../Components/DropDown/DropDown'

interface StartedProps {
    dateValue: string
    carSeries: DropdownOption
    availbleCarOptions: Cars[]
    filterCars: (value: string) => void
    onChangeDropDown: (value: DropdownOption) => void
}

function GettingStarted({ availbleCarOptions, carSeries, dateValue, filterCars, onChangeDropDown }: StartedProps) {
    const availbleCarModels = availbleCarOptions.map(car => ({ value: car.model.series, label: `Series ${car.model.series}` }))
    const uniqueCarModels = availbleCarModels.reduce((acc: any, current: any) => {
        const x = acc.find((item: any) => item.value === current.value);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);


    return (
        <div className='u-width-100 u-flex u-flex--justify-center u-flex--align-center u-flex--column'>
            <h1>Lets get started!</h1>
            <p>Enter you cars Series below</p>
            {/* <div className='c-getting-started__input-container'>
                <FormTextInput placeholder='What year was your polo produced?' onChange={e => onChangeDate(e)} value={dateValue} Icon={AccountCircleRounded} />
            </div> */}
            <DropDown currentValue={carSeries.label} placeholder='car model' onChange={onChangeDropDown} options={uniqueCarModels} />
            <Button style='primary' text='Enter Search' onClick={() => filterCars(dateValue)} />
        </div>
    )
}

export default GettingStarted
