import React, { useState, ChangeEvent } from 'react'
import { AccountCircleRounded, ExpandMore } from '@material-ui/icons'

import FormTextInput from '../../Components/FormTextInput/FormTextInput'
import { Cars } from '../../redux/actions/actionTypes'
import Button from '../../Components/Button/Button'
import './GettingStarted.scss'
import DropDown, { DropdownOption } from '../../Components/DropDown/DropDown'
import { removeDuplicate } from './GettingStarted.utils'

interface StartedProps {
    carSeries: DropdownOption
    currentStage: number
    numberofCarDoors: DropdownOption
    availbleCarOptions: Cars[]
    onChangeDropDown: (value: DropdownOption) => void
    onPressNext: (value: DropdownOption) => void
}

function GettingStarted({
    onPressNext,
    availbleCarOptions,
    carSeries,
    numberofCarDoors,
    currentStage,
    onChangeDropDown
}: StartedProps) {
    const availbleCarModels = availbleCarOptions.map(car => ({ value: car.model.series, label: `Series ${car.model.series}` }))
    const uniqueCarModels = removeDuplicate(availbleCarModels)
    const availbleCarDoors = availbleCarOptions.map(car => ({ value: `${car.model.doorCount}`, label: `${car.model.doorCount}` }))
    const uniqueAvailbleCarDoors = removeDuplicate(availbleCarDoors)
    /* <div className='c-getting-started__input-container'>
                <FormTextInput placeholder='What year was your polo produced?' onChange={e => onChangeDate(e)} value={dateValue} Icon={AccountCircleRounded} />
            </div> */

    return (
        <div className='u-flex u-flex--justify-center u-flex--align-center u-flex--column'>
            {currentStage === 0 && (
                <div>
                    <h1>Lets get started!</h1>
                    <p>Enter you cars Series below</p>
                    <DropDown currentValue={carSeries.label} placeholder='car model' onChange={onChangeDropDown} options={uniqueCarModels} />
                    <Button style='primary' text='Enter Search' onClick={() => onPressNext(carSeries)} />
                </div>
            )}
            {currentStage === 1 && (
                <div>
                    <h1>Hmm, okay you have this many potential matches</h1>
                    <p>How many doors does your car have?</p>
                    <DropDown currentValue={numberofCarDoors.label} placeholder='car model' onChange={onChangeDropDown} options={uniqueAvailbleCarDoors} />
                    <Button style='primary' text='Enter Search' onClick={() => onPressNext(carSeries)} />
                </div>
            )}
        </div>
    )
}

export default GettingStarted
