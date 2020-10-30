import { GET_ALL_CARS, Cars, FILTER_CARS, GET_CODE_FACT } from "../actions/actionTypes"

interface InitialCarsState {
  allCars: Cars[]
  filteredCars: Cars[]
  fact: any
}

const initialState: InitialCarsState = {
  allCars: [],
  filteredCars: [],
  fact: undefined,
}

export const carsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_CARS:
      return {
        ...state,
        allCars: action.payload,
        filteredCars: action.payload
      }
    case FILTER_CARS:
      return {
        ...state,
        filteredCars: action.payload
      }
    case GET_CODE_FACT:
      return {
        ...state,
        fact: action.payload
      }
    default:
      return state
  }
}
