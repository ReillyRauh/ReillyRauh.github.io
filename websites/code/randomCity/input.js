import { usCities, euCities, asCities, meCities } from "./modules/cities.mjs";

function locationPicker(country) {
    const randomUS = Math.floor(Math.random() * usCities.length);
    const randomEU = Math.floor(Math.random() * euCities.length);
    const randomAS = Math.floor(Math.random() * asCities.length);
    const randomME = Math.floor(Math.random() * meCities.length);

    if (typeof country !== 'string') {
        throw 'invalid input; please input a string'
    } else {
        if (country === 'us' || country === 'US') {
            return 'You should go to ' + usCities[randomUS];
        } else if (country === 'eu' || country === 'EU' || country === 'Europe' || country === 'europe') {
            return 'You should go to ' + euCities[randomEU];
        } else if (country === 'as' || country === 'AS' || country === 'Asia' || country === 'asia') {
            return 'You should go to ' + asCities[randomAS];
        } else if (country === 'me' || country === 'ME' || country === 'Middle East' || country === 'middle east') {
            return 'You should go to ' + meCities[randomME];
        } else {
            return 'Error: No city input'
        }
    }
}

for (let i = 0; i < 50; i++) {
    console.log(locationPicker('us'))
}