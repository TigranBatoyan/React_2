class Api{
    getCountries(){
        return fetch('https://it-blog-posts.herokuapp.com/api/countries')
            .then(response=>response.json())
    }

    getAirlines(){
        return fetch('https://it-blog-posts.herokuapp.com/api/airline')
            .then(response=>response.json())
    }
}
const api = new Api()
export const getCountries = api.getCountries
export const getAirlines = api.getAirlines