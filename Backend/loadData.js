const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex(process.env.ALGOLIA_CLIENT);
const fetch = require('node-fetch');

let url = "https://ckan0.cf.opendata.inter.prod-toronto.ca/download_resource/29852011-c9c2-4b6d-a79a-b718f5ed1ae2?format=json";
let settings = { method: "Get" };

var date = new Date();
date.setDate(date.getDate() - 1);

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        var arr = [];
        for (i in json) {
            if(json[i].OCCUPANCY_DATE.substring(0,10) == date.toISOString().substring(0,10)) {
                //occupancy change
                const OCCUPANCY = json[i].OCCUPANCY;
                const CAPACITY = json[i].CAPACITY;
                const val = OCCUPANCY/CAPACITY;
                var num = 3;

                if(OCCUPANCY != 0) {
                    if(val < 1/3) {
                        num = 1;
                    } else if (val < 2/3) {
                        num = 2;
                    } else {
                        num = 3;
                    } 
                }

                json[i].SHELTER_ADDRESS = (json[i].SHELTER_ADDRESS + ", " 
                                        + json[i].SHELTER_CITY + ", " 
                                        + json[i].SHELTER_PROVINCE + ", " 
                                        + json[i].SHELTER_POSTAL_CODE);
                json[i].URL = ("https://www.google.com/maps/place/" + 
                                json[i].SHELTER_ADDRESS.split(' ').join('+')); 
                json[i].OCCUPANCY = num;
                json[i].objectID = json[i]._id;
                console.log(json[i]);
                arr.push(json[i]);
            }
        }
        //index.saveObjects(arr);
        console.log(arr);
    });