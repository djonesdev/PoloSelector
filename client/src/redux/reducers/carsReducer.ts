import { GET_ALL_CARS, Cars, FILTER_CARS } from "../actions/actionTypes"

interface InitialCarsState {
  allCars: Cars[]
  filteredCars: Cars[]
}

const initialState: InitialCarsState = {
  allCars: [],
  filteredCars: []
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
    default:
      return state
  }
}
