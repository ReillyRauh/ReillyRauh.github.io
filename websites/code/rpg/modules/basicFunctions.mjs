import * as gather from './gatheringFunctions.mjs'
import * as arrayList from './arrays.mjs'
import { Survivor, survivorsArray } from './survivors.mjs'

export let currentWeather = 'Clear'
export function weatherChange() {
    let changeChance = 0;
    let rain = 0;
    let wind = 0;
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
                wind + 45
            } else {
                currentWeather = 'Light Sprinkle'
                changeChance = 0;
                wind + 15
            }
        } else {
            changeChance + 10
        }
    } else if (currentWeather === 'Cloudy') {
        if (randomChance < 10) {
            wind + 20
        } else {
            changeChance + 10;
        }
    } else if (changeChance > 100) {
        changeChance = 0;   
    }
}

export function weatherDamage() {
    const isBuilt = Survivor.shelter.isBuilt;
    const health = Survivor.shelter.health;
    if (isBuilt) {
        if (health > 0) {
            const remove = wind - health;

            if (remove > 0) {
                health -= wind / 2
            } else if (remove < 0) {
                const removeTwo = health - wind;

                health -= removeTwo / 2;
            }
        } else {
            Survivor.shelter.destroy()
        }
    } else {
        return 'There is no structure';
    }
}

export function chooseSurvivor() {
    for (let i = 0; i > Survivor.survivorsArray.length; i++) {
        if (Survivor.survivorsArray[i].energy > 50) {
            break
            
            return survivorsArray[i]
        }
    }
}

export function sleep(survivor) {
    survivor.sleep();
}