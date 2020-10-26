import { ThunkAction } from 'redux-thunk'
import { Dispatch } from 'redux';

import CarsApi from '../../service/carsApi'
import { GET_ALL_CARS, CarActionTypes } from './actionTypes'

export const getAllCars = () => async (dispatch: Dispatch): Promise<void> => {
    const carsResults = await CarsApi.getAllCars()
    dispatch({
     type: GET_ALL_CARS,
     payload: carsResults
    })
   }