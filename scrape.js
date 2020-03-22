// https://www.npmjs.com/package/kijiji-scraper
const kijiji = require("kijiji-scraper");

let options = {
    minResults: 40
};

let params = {
    locationId: 1700272,  // Same as kijiji.locations.ONTARIO.TORONTO_GTA
    categoryId: 174,  // Same as kijiji.categories.CARS_AND_VEHICLES - 174, PS4-792, free stuff- 17220001
    sortByName: "dateDesc",  // Show the cheapest listings first
    keywords: "Audi A4 2012",
    adType: "OFFER",
    minPrice: 1000,
    maxPrice: 10000
    //adType: "WANTED"
};

// Scrape using returned promise
kijiji.search(params).then(function(ads) {
    // Use the ads array
    let total = 0;
    let totalPrice = 0;
    for (let i = 0; i < ads.length; ++i) {
        //console.log(ads[i].title);
        //console.log(ads[i].description);
        //console.log(ads[i].attributes.price);
        //console.log(ads[i].url);
        //console.log(`Price: ${ads[i].attributes.price}`)
        //console.log(`Title: ${ads[i].title} -- Price: ${ads[i].attributes.price} -- date: ${ads[i].date} -- url: ${ads[i].url}`)
        total++
        totalPrice = totalPrice + ads[i].attributes.price
    }
    console.log("total ads fetched: " + total)
    console.log(`Average Price for a ${params.keywords} is CAD$ ${Math.round(totalPrice/total)}`)
    console.log("Check these Ads, they are below average price")
    console.log("--------------------------------------------")
    for (let i = 0; i < ads.length; ++i) {
        //console.log(ads[i].title);
        //console.log(ads[i].description);
        //console.log(ads[i].attributes.price);
        //console.log(ads[i].url);
        if (ads[i].attributes.price < Math.round(totalPrice/total)) {
          console.log("------------------------------------------")
          console.log(`Title: ${ads[i].title}`)
          console.log(`Price: ${ads[i].attributes.price}`)
          console.log(`date: ${ads[i].date}`)
          console.log(`url: ${ads[i].url}`)
        }
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
