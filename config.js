// config.js
const locations = require("./location")
const catagory = require("./catagory")

// Use this opject to confirgure the scraper
module.exports = {
    locationId: locations.ONTARIO.TORONTO_GTA.id,
    categoryId: catagory.CARS_AND_VEHICLES.CARS_AND_TRUCKS.id,
    sortByName: "dateDesc",
    keywords: "Mercedes C300 2015",
    adType: "OFFER",
    minPrice: 1000,
    maxPrice: 100000
};
