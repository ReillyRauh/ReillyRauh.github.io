import * as gather from './gatheringFunctions.mjs'
import * as arrayList from './arrays.mjs'

export let currentWeather = 'Clear'
export function weatherChange() {
    let changeChance = 0
    let rain = 0
    const randomChance = Math.floor(Math.random() * 100)
    const disaster = arrayList.pickDisaster()

    if (currentWeather === 'Clear') {
        if (randomChance < changeChance) {
            currentWeather = 'Cloudy'
            changeChance = 0;
        } else {
            changeChance + 10
        }
    } else if (currentWeather === 'Cloudy') {
        let coinFlip = Math.floor(Math.random() * 2) 

        if (randomChance < changeChance) {
            if (coinFlip === 0) {
                currentWeather = disaster;
                changeChance = 0;
            } else {
                currentWeather = 'Light Sprinkle'
                changeChance = 0;
            }
        } else {
            changeChance + 10
        }
    } else {
        return `Currently unfinished, planned released Version 2.0.`
    }
}

export function weatherDamage() {
    
}