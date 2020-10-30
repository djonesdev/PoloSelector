import React from 'react'
// @ts-ignore
import ConfettiCanvas from 'react-confetti-burst-canvas'
import { DriveEta, AirportShuttle, DateRange, LocalGasStation, Settings, PowerInput } from '@material-ui/icons'

import { FactResponse } from '../../service/carsApi'
import { Cars } from '../../redux/actions/actionTypes'
import Button from '../../Components/Button/Button'
import './QuestionFlow.scss'
import DropDown, { DropdownOption } from '../../Components/DropDown/DropDown'
import { cleanObject, removeDuplicate } from './QuestionFlow.utils'

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

function QuestionFlow({
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
    const getFuelTypeLabel = (fuelType: string) => {
        switch (fuelType) {
            case 'P':
                return 'Petrol'
            case 'D':
                return 'Diesel'
            default:
                return 'Petrol'
        }
    }
    const getTransmissionLabel = (tranmission: string) => {
        switch (tranmission) {
            case 'M':
                return 'Manual'
            case 'A':
                return 'Automatic'
            default:
                return 'Manual'
        }
    }
    const hasOptions = !!availbleCarOptions.length
    const availbleCarSeries = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.series, label: `Series ${car.model.series}` })))
    const availbleCarModels = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.model, label: `${car.model.model}` })))
    const availbleCarDoors = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.doorCount, label: `Num. of Doors: ${car.model.doorCount}` })))
    const availableTransmissions = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.transmission, label: `${getTransmissionLabel(car.model.transmission)}` })))
    const availableFuelTypes = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.fuelType, label: `${getFuelTypeLabel(car.model.fuelType)}` })))
    const availableBodyDescriptions = removeDuplicate(availbleCarOptions.map(car => ({ value: car.details.bodyDesc, label: `${car.details.bodyDesc}` })))
    const availableProductionYears = removeDuplicate(availbleCarOptions.map(car => ({ value: car.model.yearTo, label: `${car.model.yearFrom} ${car.model.yearTo && ' - ' + car.model.yearTo}` })))
    const availbleBhp = removeDuplicate(availbleCarOptions.map(car => ({ value: car.details.bhpCount, label: `BHP: ${car.details.bhpCount}` })))
    const cleanedFinalCar = availbleCarOptions.length === 1 && cleanObject({ ...availbleCarOptions[0] })

    if (availbleCarOptions.length === 1) {
        const carCode = availbleCarOptions[0].model.abiCode
        return (
            <div className='u-flex--centered-column'>
                <div style={{ height: 250, width: '85%' }}>
                    <ConfettiCanvas />
                </div>
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
                {!!fact && (
                    <div>
                        <h3>Heres a fact related to your cars abi code!</h3>
                        <p>{fact.text}</p>
                    </div>
                )}
                <div className='u-flex'>
                    <Button className='c-getting-started__final-button' style='primary' text='Get Fact' onClick={() => getCodeFact(carCode.substring(0, 3))} />
                    <Button className='c-getting-started__final-button' style='primary' text='Start Again' onClick={() => reset()} />
                </div>
            </div>
        )
    }

    if (availbleCarOptions.length <= 10) {
        return (
            <div className='u-flex--centered-column'>
                <h1>Hmm,dsad okay you have this many potential matches {availbleCarOptions.length}</h1>
                <p>Which model from the list below is your car?</p>
                <DropDown LeadIcon={DriveEta} currentValue={specificCar.label} placeholder='Car Model' onChange={handleSpecificCarChange} options={availbleCarModels} />
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
                        <DropDown LeadIcon={DriveEta} currentValue={carSeries.label} placeholder='Car Series' onChange={onChangeDropDown} options={availbleCarSeries} />
                    </div>
                    <Button disabled={!carSeries.label} style='primary' text='Enter Search' onClick={() => onPressNext(carSeries, ['model', 'series'])} />
                </div>
            )}
            {hasOptions && currentStage === 1 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>How many doors does your car have?</p>
                    <div>
                        <DropDown LeadIcon={AirportShuttle} currentValue={numberofCarDoors.label} placeholder='Number of Doors' onChange={handleDoorNumberChange} options={availbleCarDoors} />
                    </div>
                    <Button disabled={!numberofCarDoors.label} style='primary' text='Enter Search' onClick={() => onPressNext(numberofCarDoors, ['model', 'doorCount'])} />
                </div>
            )}
            {hasOptions && currentStage === 2 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>What years were your car produced?</p>
                    <DropDown LeadIcon={DateRange} currentValue={productionYear.label} placeholder='Years of Production' onChange={handleProductionYearChange} options={availableProductionYears} />
                    <Button disabled={!productionYear.label} style='primary' text='Enter Search' onClick={() => onPressNext(productionYear, ['model', 'yearTo'])} />
                </div>
            )}
            {hasOptions && currentStage === 3 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>What type of fuel does your car take?</p>
                    <DropDown LeadIcon={LocalGasStation} currentValue={fuelType.label} placeholder='Type of Fuel' onChange={handleFuelTypeChange} options={availableFuelTypes} />
                    <Button disabled={!fuelType.label} style='primary' text='Enter Search' onClick={() => onPressNext(fuelType, ['model', 'fuelType'])} />
                </div>
            )}
            {hasOptions && currentStage === 4 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>Which of these best describes your car?</p>
                    <DropDown LeadIcon={DriveEta} currentValue={bodyDesc.label} placeholder='Best Description' onChange={handleBodyDescChange} options={availableBodyDescriptions} />
                    <Button disabled={!bodyDesc.label} style='primary' text='Enter Search' onClick={() => onPressNext(bodyDesc, ['details', 'bodyDesc'])} />
                </div>
            )}
            {hasOptions && currentStage === 5 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>What type of transmission is your car?</p>
                    <DropDown LeadIcon={Settings} currentValue={transmission.label} placeholder='Type of Transmission' onChange={handleTransmissionChange} options={availableTransmissions} />
                    <Button disabled={!transmission.label} style='primary' text='Enter Search' onClick={() => onPressNext(transmission, ['model', 'transmission'])} />
                </div>
            )}
            {hasOptions && currentStage === 6 && (
                <div className='u-flex--centered-column'>
                    <h1>Hmm, okay you have this many potential matches {availbleCarOptions.length}</h1>
                    <p>How much BHP (Brake Horse Power) does your car have?</p>
                    <DropDown LeadIcon={PowerInput} currentValue={bhp.label} placeholder='BHP (Brake Horse Power)' onChange={handleBhpChange} options={availbleBhp} />
                    <Button disabled={!bhp.label} style='primary' text='Enter Search' onClick={() => onPressNext(bhp, ['details', 'bhpCount'])} />
                </div>
            )}
        </div>
    )
}

export default QuestionFlow
