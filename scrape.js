// https://www.npmjs.com/package/kijiji-scraper
const kijiji = require("kijiji-scraper");
const params = require("./config");

// Scrape using returned promise
kijiji.search(params).then(function(ads) {
    // Use the ads array
    let total = 0;
    let totalPrice = 0;
    for (let i = 0; i < ads.length; ++i) {
        total++
        totalPrice = totalPrice + ads[i].attributes.price
    }
    console.log("total ads fetched: " + total)
    console.log(`Average Price for a ${params.keywords} is CAD$ ${Math.round(totalPrice/total)}`)
    console.log("Check these Ads, they are below average price")
    console.log("--------------------------------------------")
    for (let i = 0; i < ads.length; ++i) {
        if (ads[i].attributes.price < Math.round(totalPrice/total)) {
          console.log("------------------------------------------")
          console.log(`Title: ${ads[i].title}`)
          console.log(`Price: ${ads[i].attributes.price}`)
          console.log(`date: ${ads[i].date}`)
          console.log(`url: ${ads[i].url}`)
        }
    }
}).catch(console.error);
