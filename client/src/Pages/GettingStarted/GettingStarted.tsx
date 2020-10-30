import React, { useState, ChangeEvent } from 'react'
import { AccountCircleRounded, ExpandMore } from '@material-ui/icons'
import { diff } from 'deep-diff';


import FormTextInput from '../../Components/FormTextInput/FormTextInput'
import { FactResponse } from '../../service/carsApi'
import { Cars } from '../../redux/actions/actionTypes'
import Button from '../../Components/Button/Button'
import './GettingStarted.scss'
import DropDown, { DropdownOption } from '../../Components/DropDown/DropDown'
import { cleanObject, removeDuplicate } from './GettingStarted.utils'

interface StartedProps {
    moveCount: number
    currentStage: number
    carSeries: DropdownOption
    transmission: DropdownOption
    fuelType: DropdownOption
    productionYear: DropdownOption
    bodyDesc: DropdownOption
    numberofCarDoors: DropdownOption
    bhp: DropdownOption
    specificCar: DropdownOption
    availbleCarOptions: Cars[]
    fact: FactResponse
    onChangeDropDown: (value: DropdownOption) => void
    handleDoorNumberChange: (value: DropdownOption) => void
    handleTransmissionChange: (value: DropdownOption) => void
    handleFuelTypeChange: (value: DropdownOption) => void
    handleProductionYearChange: (value: DropdownOption) => void
    handleBodyDescChange: (value: DropdownOption) => void
    handleBhpChange: (value: DropdownOption) => void
    handleSpecificCarChange: (value: DropdownOption) => void
    onPressNext: (value: DropdownOption, accessors: string[]) => void
    reset: () => void
    getCodeFact: (code: string) => void
}

function GettingStarted({
    getCodeFact,
    onPressNext,
    reset,
    availbleCarOptions,
    carSeries,
    numberofCarDoors,
    currentStage,
    onChangeDropDown,
    handleDoorNumberChange,
    transmission,
    handleTransmissionChange,
    fuelType,
    handleFuelTypeChange,
    bodyDesc,
    handleBodyDescChange,
    handleProductionYearChange,
    productionYear,
    bhp,
    handleBhpChange,
    specificCar,
    handleSpecificCarChange,
    moveCount,
    fact
}: StartedProps) {
    const hasOptions = !!availbleCarOptions.length
    const availbleCarSeries = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.series, label: `Series ${car.model.series}` })))
    const availbleCarModels = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.model, label: `${car.model.model}` })))
    const availbleCarDoors = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.doorCount, label: `Num. of Doors: ${car.model.doorCount}` })))
    const availableTransmissions = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.transmission, label: `${car.model.transmission}` })))
    const availableFuelTypes = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.fuelType, label: `${car.model.fuelType}` })))
    const availableBodyDescriptions = removeDuplicate(availbleCarOptions.map(car => ({ value: car.details.bodyDesc, label: `${car.details.bodyDesc}` })))
    const availableProductionYears = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.yearTo, label: `${car.model.yearFrom} ${car.model.yearTo && ' - ' + car.model.yearTo}` })))
    const availbleBhp = removeDuplicate(availbleCarOptions.map(car => ({ value: car.details.bhpCount, label: `BHP: ${car.details.bhpCount}` })))
    const cleanedFinalCar = availbleCarOptions.length === 1 && cleanObject({ ...availbleCarOptions[0] })

    if (availbleCarOptions.length === 1) {
        const carCode = availbleCarOptions[0].model.abiCode
        return (
            <div className='u-flex--centered-column'>
                <h1>Hey look! We found your car in {moveCount} questions!</h1>
                <div className='u-width-100 u-flex u-flex--justify-center u-flex--align'>
                    <div className='u-flex--centered-column u-flex--one'>
                        <h3>Car Details</h3>
                        {Object.entries(cleanObject({ ...availbleCarOptions[0].model })).map(([key, value]) => <p key={key}><b>{key}: </b>{value}</p>)}
                    </div>
                    <div className='u-flex--centered-column u-flex--one'>
                        <h3>Car model</h3>
                        {Object.entries(cleanObject({ ...availbleCarOptions[0].model })).map(([key, value]) => <p key={key}><b>{key}: </b>{value}</p>)}
                    </div>
                </div>
                <div className='u-flex'>
                    <Button style='primary' text='Get Fact' onClick={() => getCodeFact(carCode.substring(0, 3))} />
                    <Button style='primary' text='Start Again' onClick={() => reset()} />
                </div>
                {!!fact && (
                    <div>
                        <h3>Heres a fact related to your cars abi code!</h3>
                        {/* @ts-ignore */}
                        <p>{fact.text}</p>
                    </div>
                )}
            </div>
        )
    }

    if (availbleCarOptions.length <= 10) {
        return (
            <div className='u-flex--centered-column'>
                <h1>Hmm,dsad okay you have this many potential matches {availbleCarOptions.length}</h1>
                <p>Which model from the list below is your car?</p>
                <DropDown currentValue={specificCar.label} placeholder='Car Model' onChange={handleSpecificCarChange} options={availbleCarModels} />
                <Button disabled={!specificCar.label} style='primary' text='Enter Search' onClick={() => onPressNext(specificCar, ['model', 'model'])} />
            </div>
        )
    }

    return (
        <div className='u-flex--centered-column'>
            {hasOptions && currentStage === 0 && (
                <div>
                    <h1>Lets get started!</h1>
                    <p>Enter Your Cars Series Below</p>
                    <div>
                        <DropDown currentValue={carSeries.label} placeholder='Car Series' onChange={onChangeDropDown} options={availbleCarSeries} />
                    </div>
                    <Button disabled={!carSeries.label} style='primary' text='Enter Search' onClick={() => onPressNext(carSeries, ['model', 'series'])} />
                </div>
            )}
            {hasOptions && currentStage === 1 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>How many doors does your car have?</p>
                    <div>
                        <DropDown currentValue={numberofCarDoors.label} placeholder='Number of Doors' onChange={handleDoorNumberChange} options={availbleCarDoors} />
                    </div>
                    <Button disabled={!numberofCarDoors.label} style='primary' text='Enter Search' onClick={() => onPressNext(numberofCarDoors, ['model', 'doorCount'])} />
                </div>
            )}
            {hasOptions && currentStage === 2 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>What years were your car produced?</p>
                    <DropDown currentValue={productionYear.label} placeholder='Years of Production' onChange={handleProductionYearChange} options={availableProductionYears} />
                    <Button disabled={!productionYear.label} style='primary' text='Enter Search' onClick={() => onPressNext(productionYear, ['model', 'yearTo'])} />
                </div>
            )}
            {hasOptions && currentStage === 3 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>What type of fuel does your car take?</p>
                    <DropDown currentValue={fuelType.label} placeholder='Type of Fuel' onChange={handleFuelTypeChange} options={availableFuelTypes} />
                    <Button disabled={!fuelType.label} style='primary' text='Enter Search' onClick={() => onPressNext(fuelType, ['model', 'fuelType'])} />
                </div>
            )}
            {hasOptions && currentStage === 4 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>Which of these best describes your car?</p>
                    <DropDown currentValue={bodyDesc.label} placeholder='Best Description' onChange={handleBodyDescChange} options={availableBodyDescriptions} />
                    <Button disabled={!bodyDesc.label} style='primary' text='Enter Search' onClick={() => onPressNext(bodyDesc, ['details', 'bodyDesc'])} />
                </div>
            )}
            {hasOptions && currentStage === 5 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>What type of transmission is your car?</p>
                    <DropDown currentValue={transmission.label} placeholder='Type of Transmission' onChange={handleTransmissionChange} options={availableTransmissions} />
                    <Button disabled={!transmission.label} style='primary' text='Enter Search' onClick={() => onPressNext(transmission, ['model', 'transmission'])} />
                </div>
            )}
            {hasOptions && currentStage === 6 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>How much BHP (Brake Horse Power) does your car have?</p>
                    <DropDown currentValue={bhp.label} placeholder='BHP (Brake Horse Power)' onChange={handleBhpChange} options={availbleBhp} />
                    <Button disabled={!bhp.label} style='primary' text='Enter Search' onClick={() => onPressNext(bhp, ['details', 'bhpCount'])} />
                </div>
            )}
            {/* {hasOptions && currentStage === 7 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>Which model from the list below is your car?</p>
                    <DropDown currentValue={productionYear.label} placeholder='Car Model' onChange={handleProductionYearChange} options={availbleCarModels} />
                    <Button disabled={!productionYear.label} style='primary' text='Enter Search' onClick={() => onPressNext(productionYear, ['model', 'yearTo'])} />
                </div>
            )} */}
            {currentStage === 8 && (
                <div className='u-flex--centered-column'>
                    <h1>I think we've found your car! {availbleCarOptions.length}</h1>
                    <p>Given these answers you prodivded, this is the car we have on record</p>
                    <DropDown currentValue={productionYear.label} placeholder='Car Model' onChange={handleProductionYearChange} options={availbleCarModels} />
                    <Button disabled={!productionYear.label} style='primary' text='Enter Search' onClick={() => onPressNext(productionYear, ['model', 'yearTo'])} />
                </div>
            )}
        </div>
    )
}

export default GettingStarted
