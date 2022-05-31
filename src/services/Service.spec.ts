import SwapiService from "./SwapiService"

const service = new SwapiService()

service.fetchPeople().then(console.log)
service.fetchPlanets().then(console.log)
service.fetchStarships().then(console.log)

service.fetchPerson(5).then(console.log)
service.fetchPlanet(5).then(console.log)
service.fetchStarship(5).then(console.log)