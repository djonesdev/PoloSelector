export const GET_ALL_CARS = 'GET_ALL_CARS'
export const FILTER_CARS = 'FILTER_CARS'
export const GET_CODE_FACT = 'GET_CODE_FACT'

interface CarDetails {
    manufacturedDate?: string,
    registrationDate?: string,
    vinEnding?: string,
    colour?: string,
    registration?: string,
    bodyDesc: string,
    bodyClass: string,
    importedUk?: string,
    grossWeight: number,
    kerbWeight: number,
    bhpCount: number
}

interface CarModelDetails {
    make: string,
    model: string,
    baseModel: string,
    series: string
    cc: number
    yearFrom: string
    yearTo: string
    type?: string
    doorCount: number
    seatCount: number
    fuelType: string,
    transmission: string,
    abiCode: string,
    cdlCode?: string,
    co2: number
}

interface CarSecurity {
    securityStatus: string,
    securityStatusDescription?: string,
    groupStatus: string,
    groupStatusDescription?: string,
    groupRatings: [
        {
            range: string
            rating: string
        },
        {
            range: string
            rating: string
        }
    ]
}

export interface Cars {
    model: CarModelDetails
    keeper?: string,
    details: CarDetails
    security: CarSecurity
    valuations: object[]
}

interface GetAllCarsAction {
    type: typeof GET_ALL_CARS
    payload: Cars[]
}

interface FilterCarsAction {
    type: typeof FILTER_CARS
    payload: Cars[]
}

interface GetFactAction {
    type: typeof GET_CODE_FACT
    payload: object
}

export type CarActionTypes = GetAllCarsAction | FilterCarsAction | GetFactAction