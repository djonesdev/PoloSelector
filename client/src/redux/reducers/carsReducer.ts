import { GET_ALL_CARS, Cars } from "../actions/actionTypes"

interface InitialCarsState {
  allCars: Cars[]
}

const initialState: InitialCarsState = {
  allCars: []
}

export const carsReducer = (state = initialState, action: any) => {
    switch (action.type) {
     case GET_ALL_CARS:
      return {
        ...state,
       allCars: action.payload
      }
     default:
      return state
    }
   }
