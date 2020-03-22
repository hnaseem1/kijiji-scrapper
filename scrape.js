// https://www.npmjs.com/package/kijiji-scraper
const kijiji = require("kijiji-scraper");

let options = {
    minResults: 40
};

let params = {
    locationId: 1700272,  // Same as kijiji.locations.ONTARIO.TORONTO_GTA
    categoryId: 0,  // Same as kijiji.categories.CARS_AND_VEHICLES
    sortByName: "dateAsc",  // Show the cheapest listings first
    keywords: "ps4",
    minPrice: 100,
    maxPrice: 200,
    adType: "OFFER"
};

// Scrape using returned promise
kijiji.search(params, options).then(function(ads) {
    // Use the ads array
    for (let i = 0; i < ads.length; ++i) {
        console.log(ads[i].title);
        //console.log(ads[i].description);
        console.log(ads[i].attributes.price);
        console.log(ads[i].url);
    }
}).catch(console.error);

// Scrape using optional callback parameter
function callback(err, ads) {
    if (!err) {
        // Use the ads array
        for (let i = 0; i < ads.length; ++i) {
            console.log(ads[i].title);
        }
    }
}
//kijiji.search(params, options, callback);
//console.log(kijiji.locations)
