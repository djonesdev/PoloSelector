export interface FactResponse {
    text: string,
    found: boolean,
    number: number,
    type: string,
    date?: string
}

export default {
    getAllCars: () => {
        return fetch('http://localhost:9000/poloApi')
            .then(res => res.json())
    },
    getCodeFact: (code: string): Promise<FactResponse> => {
        return fetch(`http://numbersapi.com/${code}?json`)
            .then(res => res.json())
    }
}