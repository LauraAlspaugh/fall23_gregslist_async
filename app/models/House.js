import { AppState } from "../AppState.js";



export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.creator = data.creator
    }
    get HouseCardTemplate() {
        return `
        <section id="houses" class="row justify-content-center">
        <div class="col-10 mb-3">
            <div class="d-flex shadow">
            <img class="house-image"
                src="${this.imgUrl}">
            <div class="p-3">
                <h2>Name</h2>
                <p>Bedrooms: ${this.bedrooms}  Bathrooms: ${this.bathrooms}</p>
                <p>Levels: ${this.levels}</p>
                <p>Price: ${this.price}</p>
                <p>Year: ${this.year}</p>
                <p>Listed On: ${this.createdAt.toLocaleString()}</p>
                <p>Updated At: ${this.updatedAt.toLocaleString()}</p>
                <p>${this.description}</p>
                <div class="">
                <img class="img-fluid rounded-circle house-creator" src="${this.creator.picture}" alt="${this.creator.name}">
                <p>${this.creator.name}</p>
                <div class="text-end">
                ${this.ComputeDeleteButton}
</div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
        `
    }
    get ComputeDeleteButton() {
        if (AppState.account?.id == this.creatorId) {
            return `
<button onclick="app.HousesController.removeHouse('${this.id}')" class="btn btn-danger">Delete
`
        }
        return ''
    }
    static get HouseFormTemplate() {
        return `
        <section id="houseForm" class="row justify-content-center">
        <div class="col-10 col-md-8 p-4">
            <form onsubmit="app.HousesController.createHouse(event)">

            <div class="mb-2">
                <label for="year">Year</label>
                <input id="year" type="text" name="year" required placeholder="Year...">
            </div>

            <div class="mb-2">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" required placeholder="Name...">
            </div>

            <div class="mb-2">
                <label for="bedrooms">Number of Bedrooms</label>
                <input id="bedrooms" type="text" name="bedrooms" required placeholder="Number of bedrooms...">
            </div>

            <div class="mb-2">
                <label for="bathrooms">Number of Bathrooms</label>
                <input id="bathrooms" type="text" name="bathrooms" required placeholder="Number of bathrooms...">
            </div>

            <div class="mb-2">
                <label for="levels">Levels</label>
                <input id="levels" type="text" name="levels" required placeholder="Levels...">
            </div>

            <div class="mb-2">
                <label for="price">Price</label>
                <input id="price" type="text" name="price" required placeholder="Price...">
            </div>

            <div class="mb-2">
                <label for="description">Description</label>
                <input id="description" type="text" name="description" maxlength="500" placeholder="Description...">
            </div>

            <div class="mb-2">
                <label for="imgUrl">Image Url</label>
                <input id="imgUrl" type="text" name="imgUrl" maxlength="500" placeholder="Image Url...">
            </div>


            <div>
                <button class="btn btn-success" type="submit">Submit</button>
            </div>

        `
    }





}
const houseData = {

    // "_id": "645d60f381faf24223ae886b",
    // "bedrooms": 3,
    // "bathrooms": 2,
    // "levels": 2,
    // "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
    // "year": 2003,
    // "price": 230000,
    // "description": "Super sick house",
    // "creatorId": "63f7d6202d1cf882287f12e2",
    // "createdAt": "2023-05-11T21:41:07.979Z",
    // "updatedAt": "2023-05-11T21:41:07.979Z",
    // "__v": 0,
    // "creator": {
    //     "_id": "63f7d6202d1cf882287f12e2",
    //     "name": "Charles Francis Xavier",
    //     "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
    //     "id": "63f7d6202d1cf882287f12e2"
}

