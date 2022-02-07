export default class SwapiService {

    getResource = async url => {
        const res = await fetch(`${this._infoBase}${url}`)
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    }
  
    getAllPeople = async () => {
        const res = await this.getResource("/people/")
        return res.results.map(this._transformPerson)
    }
    getAllPlanets = async () => {
        const res = await this.getResource("/planets/")
        return res.results.map(this._transformPlanet)
    }
    getAllStarships = async () => {
        const res = await this.getResource("/starships/")
        return res.results.map(this._transformStarship)
    }
  
    getPerson = async id => {
        const person = await this.getResource(`/people/${id}/`)
        return this._transformPerson(person)
    }
    getPlanet = async id => {
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }
    getStarship = async id => {
        const starship = await this.getResource(`/starships/${id}/`)
        return this._transformStarship(starship)
    }
  
    getPersonImage = ({ id }) => `${this._imageBase}/characters/${id}.jpg`
    getStarshipImage = ({ id }) => `${this._imageBase}/starships/${id}.jpg`
    getPlanetImage = ({ id }) => `${this._imageBase}/planets/${id}.jpg`
  
    // private section

    _infoBase = "https://swapi.dev/api"
    _imageBase = "https://starwars-visualguide.com/assets/img"

    _extractId = item => item.url.match(/\d+/)

    _transormPlanet = planet => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transormStarship = starship => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson = person => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}