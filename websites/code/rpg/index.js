import * as gather from './modules/gatheringFunctions.mjs';
import * as survivors from './modules/survivors.mjs';
import * as animal from './modules/arrays.mjs';
import * as basic from './modules/basicFunctions.mjs';
import { writeSignature } from './modules/signature.mjs';

writeSignature()

function startGame() {
    const currentVersion = 1.1
    console.log(`Now loading RPG Simulation version ${currentVersion}.`)

    if (gather.currentFood < 1) {
        gather.findFood(basic.chooseSurvivor())
    } else if (gather.currentWater < 1) {
        gather.findWater(basic.chooseSurvivor())
    } else if (!survivors.shelter._isBuilt) {
        survivors.shelter.build();
    }

    for (let i = 0; i > survivors.survivorsArray; i++) {
        if (survivors.survivorsArray[i].hunger < 10) {
            survivors.survivorsArray[i].eat()
        } else if (survivors.survivorsArray[i].thirst < 10) {
            survivors.survivorsArray[i].thirst()
        } else {
            break
        }
    }
}

startGame()