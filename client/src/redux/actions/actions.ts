
import { ThunkAction } from 'redux-thunk'
import { Dispatch } from 'redux';
import moment from 'moment'

import CarsApi from '../../service/carsApi'
import { GET_ALL_CARS, GET_CODE_FACT, CarActionTypes, FILTER_CARS } from './actionTypes'

export const getAllCars = () => async (dispatch: Dispatch): Promise<void> => {
    const carsResults = await CarsApi.getAllCars()
    dispatch({
        type: GET_ALL_CARS,
        payload: carsResults
    })
}

export const filterCars = (value: string, accessors: string[]) => async (dispatch: Dispatch, getState: Function): Promise<void> => {
    const state = getState()
    let newFilteredState;
    if (accessors.length > 1) {
        newFilteredState = state.cars.filteredCars.filter((car: any) => car[accessors[0]][accessors[1]] === value)
    } else {
        newFilteredState = state.cars.filteredCars.filter((car: any) => car[accessors[0]] === value)
    }

    dispatch({
        type: FILTER_CARS,
        payload: newFilteredState
    })
}


export const getCodeFact = (code: string) => async (dispatch: Dispatch): Promise<void> => {
    const factResponse = await CarsApi.getCodeFact(code)
    console.log(factResponse, 'response')
    dispatch({
        type: GET_CODE_FACT,
        payload: factResponse
    })
}