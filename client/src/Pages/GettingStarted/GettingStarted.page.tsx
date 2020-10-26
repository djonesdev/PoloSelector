import React, { useEffect, useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'

import GettingStarted from './GettingStarted'
import { getAllCars } from '../../redux/actions/actions'

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

function GettingStartedContainer(props: Props) {

    const [date, setDate] = useState("")

    useEffect(() => {
      props.getAllCars()
    }, [])

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
      }

    return <GettingStarted dateValue={date} onChangeDate={handleDateChange} />
    
}

const mapStateToProps = (state: any) => ({
    cars: state.cars
   })
  
   const mapDispatchToProps = (dispatch: any) => ({
    getAllCars: () => dispatch(getAllCars())
   })
  
   export default connect(mapStateToProps, mapDispatchToProps)(GettingStartedContainer);
