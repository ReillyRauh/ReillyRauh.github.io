import * as gather from './modules/gatheringFunctions.mjs';
import * as survivors from './modules/survivors.mjs';
import * as animal from './modules/arrays.mjs';
import * as basic from './modules/basicFunctions.mjs';
import { writeSignature } from './modules/signature.mjs';

writeSignature()

function startGame() {
    const currentVersion = 1.1
    console.log(`Now loading RPG Simulation version ${currentVersion}.`)
}