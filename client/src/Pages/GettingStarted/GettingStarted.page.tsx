import React, { useEffect, useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'

import GettingStarted from './GettingStarted'
import { getAllCars, filterCars } from '../../redux/actions/actions'
import { DropdownOption } from '../../Components/DropDown/DropDown'

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

function GettingStartedContainer(props: Props) {

  const [currentStage, setCurrentState] = useState(0)
  const [numberofCarDoors, setNumberofCarDoors] = useState({ value: '', label: '' })
  const [carSeries, setCarSeries] = useState({ value: '', label: '' })

  useEffect(() => {
    props.getAllCars()
  }, [])

  const handleSeriesChange = (option: DropdownOption) => {
    setCarSeries(option)
  }

  const handleDoorNumberChange = (option: DropdownOption) => {
    setNumberofCarDoors(option)
  }

  const onPressNext = (option: DropdownOption) => {
    props.filterCars(option.value, ['model', 'series'])
    setCurrentState(currentStage + 1)
  }


  return (
    <GettingStarted
      carSeries={carSeries}
      availbleCarOptions={props.cars}
      onChangeDropDown={handleSeriesChange}
      onPressNext={onPressNext}
      currentStage={currentStage}
      numberofCarDoors={numberofCarDoors}
    />
  )

}

const mapStateToProps = (state: any) => ({
  cars: state.cars.filteredCars
})

const mapDispatchToProps = (dispatch: any) => ({
  getAllCars: () => dispatch(getAllCars()),
  filterCars: (value: string, accessors: string[]) => dispatch(filterCars(value, accessors))
})

export default connect(mapStateToProps, mapDispatchToProps)(GettingStartedContainer);
