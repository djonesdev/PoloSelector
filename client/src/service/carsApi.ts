export default {
    getAllCars: () => {
       return fetch('http://localhost:9000/poloApi')
        .then(res => res.json())
    }
}