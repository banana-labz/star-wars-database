export default class DummyService {

    _people = [
        {
            id: 1,
            image: "https://placeimg.com/400/500/people/1.png",
            name: "Bilbo Baggins [TEST DATA]",
            gender: "male",
            birthYear: "long ago",
            eyeColor: "dark brown"
        },
        {
            id: 2,
            image: "https://placeimg.com/400/500/people/2.png",
            name: "Frodo Baggins [TEST DATA]",
            gender: "male",
            birthYear: "long ago",
            eyeColor: "dark brown"
        }
    ]

    _planets = [
        {
            id: 1,
            image: "https://placeimg.com/400/400/nature/1.png",
            name: "Earth [TEST DATA]",
            population: "7.530.000.000",
            rotationPeriod: "23 hours 56 seconds",
            diameter: "12.742 km"
        },
        {
            id: 2,
            image: "https://placeimg.com/400/400/nature/2.png",
            name: "Venus [TEST DATA]",
            population: "not known",
            rotationPeriod: "243 days",
            diameter: "12.104 km"
        }
    ]

    _starships = [
        {
            id: 1,
            image: "https://placeimg.com/400/500/tech/1.png",
            name: "USS Enterprise [TEST DATA]",
            model: "NCC-1701-C",
            manufacturer: "Northrop Grumman Shipbuilding",
            costInCredits: "not known",
            length: "approx 300 meters",
            crew: 1000,
            passengers: 50,
            cargoCapacity: 100
        }
    ]

    getAllPeople = async () => this._people
    getAllPlanets = async () => this._planets
    getAllStarships = async () => this._starships

    getPerson = async id => this._people[0]
    getPlanet = async id => this._planets[0]
    getStarship = async id => this._starships[0]
}
