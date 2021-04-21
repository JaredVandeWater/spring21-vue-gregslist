import { AppState } from '../AppState.js'
// REVIEW router gets imported directly from the router file
import router from '../router/index.js'
import { api } from './AxiosService.js'

class HousesService {
  async getHouses() {
    const res = await api.get('houses')
    AppState.houses = res.data
  }

  async getHouseById(id) {
    const res = await api.get('houses/' + id)
    AppState.activeHouse = res.data
  }

  async createHouse(newHouse) {
    const res = await api.post('houses', newHouse)
    AppState.houses.push(res.data)
    // everytime a car is created, we will change pages
    router.push({ name: 'HouseDetails', params: { id: res.data.id } })
  }

  async bid(house) {
    await api.put('houses/' + house.id, house)
  }

  async deleteHouse(id) {
    await api.delete('houses/' + id)
    AppState.houses = AppState.houses.filter(house => house.id !== id)
  }
}

export const housesService = new HousesService()
