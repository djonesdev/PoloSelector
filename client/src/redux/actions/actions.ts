import { ThunkAction } from 'redux-thunk'
import { Dispatch } from 'redux';

import CarsApi from '../../service/carsApi'
import { GET_ALL_CARS, CarActionTypes, FILTER_CARS } from './actionTypes'

export const getAllCars = () => async (dispatch: Dispatch): Promise<void> => {
    const carsResults = await CarsApi.getAllCars()
    dispatch({
        type: GET_ALL_CARS,
        payload: carsResults
    })
}

export const filterCars = (value: string) => async (dispatch: Dispatch, getState: Function): Promise<void> => {
    const state = getState()
    const newFilteredState = state.cars.filteredCars.filter((car: any) => car.model.series === value)
    console.log(newFilteredState, value)
    dispatch({
        type: FILTER_CARS,
        payload: newFilteredState
    })
}