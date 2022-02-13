export default class SwapiService {

    // private section

    _infoBase = "https://swapi.dev/api"
    _imageBase = "https://starwars-visualguide.com/assets/img"

    _extractId = item => ~~item.url.match(/\d+/)[0]

    _getPersonImage = id => `${this._imageBase}/characters/${id}.jpg`
    _getStarshipImage = id => `${this._imageBase}/starships/${id}.jpg`
    _getPlanetImage = id => `${this._imageBase}/planets/${id}.jpg`

    _transformPlanet = planet => {
        const id = this._extractId(planet)
        return {
            id: id,
            image: this._getPlanetImage(id),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformStarship = starship => {
        const id = this._extractId(starship)
        return {
            id: id,
            image: this._getStarshipImage(id),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }
    _transformPerson = person => {
        const id = this._extractId(person)
        return {
            id: id,
            image: this._getPersonImage(id),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    // public section

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
}