import React, { useEffect, useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'

import GettingStarted from './GettingStarted'
import { getAllCars, filterCars, getCodeFact } from '../../redux/actions/actions'
import { DropdownOption } from '../../Components/DropDown/DropDown'

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

function GettingStartedContainer(props: Props) {

  const [currentStage, setCurrentState] = useState(0)
  const [moveCount, setMoveCount] = useState(0)
  const [numberofCarDoors, setNumberofCarDoors] = useState({ value: '', label: '' })
  const [carSeries, setCarSeries] = useState({ value: '', label: '' })
  const [transmission, setTransmission] = useState({ value: '', label: '' })
  const [fuelType, setFuelType] = useState({ value: '', label: '' })
  const [bodyDesc, setBodyDesc] = useState({ value: '', label: '' })
  const [productionYear, setProductionYear] = useState({ value: '', label: '' })
  const [bhp, setBhp] = useState({ value: '', label: '' })
  const [specificCar, setSpecificCar] = useState({ value: '', label: '' })


  useEffect(() => {
    props.getAllCars()
  }, [])

  const handleSeriesChange = (option: DropdownOption) => {
    setCarSeries(option)
  }

  const handleDoorNumberChange = (option: DropdownOption) => {
    setNumberofCarDoors(option)
  }

  const onPressNext = (option: DropdownOption, accessors: string[]) => {
    props.filterCars(option.value, accessors)
    setCurrentState(currentStage + 1)
    setMoveCount(moveCount + 1)
  }

  const onPressFinalStage = (option: DropdownOption, accessors: string[]) => {
    props.filterCars(option.value, accessors)
    setCurrentState(currentStage + 1)
  }

  const reset = () => {
    setCurrentState(0)
    setMoveCount(0)
    setNumberofCarDoors({ value: '', label: '' })
    setCarSeries({ value: '', label: '' })
    setTransmission({ value: '', label: '' })
    setFuelType({ value: '', label: '' })
    setBodyDesc({ value: '', label: '' })
    setProductionYear({ value: '', label: '' })
    setBhp({ value: '', label: '' })
    setSpecificCar({ value: '', label: '' })
    props.getAllCars()
  }

  console.log(props.fact, 'state')

  return (
    <GettingStarted
      reset={reset}
      fact={props.fact}
      carSeries={carSeries}
      availbleCarOptions={props.cars}
      onChangeDropDown={handleSeriesChange}
      handleDoorNumberChange={handleDoorNumberChange}
      onPressNext={onPressNext}
      currentStage={currentStage}
      numberofCarDoors={numberofCarDoors}
      transmission={transmission}
      handleTransmissionChange={setTransmission}
      fuelType={fuelType}
      handleFuelTypeChange={setFuelType}
      bodyDesc={bodyDesc}
      handleBodyDescChange={setBodyDesc}
      productionYear={productionYear}
      handleProductionYearChange={setProductionYear}
      bhp={bhp}
      handleBhpChange={setBhp}
      specificCar={specificCar}
      handleSpecificCarChange={setSpecificCar}
      moveCount={moveCount}
      getCodeFact={props.getCodeFact}
    />
  )
}

const mapStateToProps = (state: any) => ({
  cars: state.cars.filteredCars,
  fact: state.cars.fact
})

const mapDispatchToProps = (dispatch: any) => ({
  getAllCars: () => dispatch(getAllCars()),
  getCodeFact: (code: string) => dispatch(getCodeFact(code)),
  filterCars: (value: string, accessors: string[]) => dispatch(filterCars(value, accessors))
})

export default connect(mapStateToProps, mapDispatchToProps)(GettingStartedContainer);
