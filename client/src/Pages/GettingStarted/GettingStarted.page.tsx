import React, { useEffect, useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'

import GettingStarted from './GettingStarted'
import { getAllCars, filterCars } from '../../redux/actions/actions'
import { DropdownOption } from '../../Components/DropDown/DropDown'

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

function GettingStartedContainer(props: Props) {

  const [date, setDate] = useState("")
  const [carSeries, setCarSeries] = useState({ value: '', label: '' })
  console.log(props.cars, 'filteredCars list')
  useEffect(() => {
    props.getAllCars()
  }, [])

  const handleSeriesChange = (option: DropdownOption) => {
    setCarSeries(option)
    props.filterCars(option.value)
  }


  return (
    <GettingStarted
      carSeries={carSeries}
      availbleCarOptions={props.cars}
      onChangeDropDown={handleSeriesChange}
      filterCars={props.filterCars}
      dateValue={date}
    />
  )

}

const mapStateToProps = (state: any) => ({
  cars: state.cars.filteredCars
})

const mapDispatchToProps = (dispatch: any) => ({
  getAllCars: () => dispatch(getAllCars()),
  filterCars: (value: string) => dispatch(filterCars(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(GettingStartedContainer);
