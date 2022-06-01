import SwapiService from "./DummyService"

const service = new SwapiService()

service.getPeople().then(console.log)
service.getPlanets().then(console.log)
service.getStarships().then(console.log)

service.getPerson(5).then(console.log)
service.getPlanet(5).then(console.log)
service.getStarship(5).then(console.log)