import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {
    console.log('drawing Houses!')
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HouseCardTemplate)
    setHTML('houseCards', content)
}
function _drawHouseForm() {
    if (!AppState.account) {
        return
    }
    setHTML('houseForm', House.HouseFormTemplate)

}

export class HousesController {
    constructor() {
        console.log('Houses Controller is loaded!')
        this.getHouses()
        _drawHouseForm()

        AppState.on('houses', _drawHouses)
        AppState.on('account', _drawHouses)
        AppState.on('account', _drawHouseForm)
    }
    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
    async createHouse(event) {
        try {
            event.preventDefault()
            console.log('form submitted');
            const form = event.target
            const houseFormData = getFormData(form)
            console.log(houseFormData);
            await housesService.createHouse(houseFormData)
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
    async removeHouse(houseId) {
        try {
            const wantsToDelete = await Pop.confirm('Are you sure you want to delete this house??')
            if (!wantsToDelete) {
                return
            }
            await housesService.removeHouse(houseId)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }




}