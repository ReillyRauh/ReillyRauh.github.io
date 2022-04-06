export { findWater, findFood, buildShelter }
import * as Survivor from './survivors.mjs';
import * as Animal from './animals.mjs';

export let currentWater = 0;
export let currentFood = 0;
export let shelter = false;

function findWater(survivor) {
    let waterDistance = Math.floor(Math.random() * 1000) + 1;
    let search = Math.floor(Math.random() * waterDistance) + 1;
    let minimumSearchRadius = waterDistance / 2;
    let attackChance = Math.floor(Math.random() * 50);
    let animal = Animal.pickAnimal()

    if (!survivor.isDead && survivor.energy <! 20) {
        if (survivor.energy <! 10) {
            if (search > minimumSearchRadius && search >! waterDistance || search === waterDistance) {
                waterFound = Math.floor(Math.random() * 50) + 1;
                currentWater += waterFound 
                survivor.energy - 10
                
                console.log(`You found ${waterFound} gallons of water, ${waterDistance} miles away from camp!`)
            } else if (attackChance < 25) {
                survivor.health = 0;
                survivor.isDead = true;

                console.log(`You were attacked by a ${animal}... Unfortunately you could not escape and died.`)
            } else if (attackChance > 25) {
                survivor.health - 45
                survivor.energy - 20

                console.log(`You were attacked by a ${animal}... Fortunately you got away and survived.`)
            } else {
                survivor.energy - 35

                console.log(`You couldn't find water`)
            }
        }
    }
}

function findFood(survivor) {
    let foodDistance = Math.floor(Math.random() * 1000) + 1;
    let search = Math.floor(Math.random() * foodDistance) + 1;
    let minimumSearchRadius = Math.floor(Math.random() * foodDistance) / 2;
    let attackChance = Math.floor(Math.random() * 50) + 1;
    let animal = Animal.pickAnimal();

    if (!survivor.isDead && survivor.energy >! 20) {
        if (attackChance > 25) {
            survivor.health = 0;
            survivor.isDead = true;

            console.log(`${animal} killed you.`)
        } else {
            if (search > minimumSearchRadius && search >! foodDistance || search === foodDistance) {
                foodFound = Math.floor(Math.random() * 100) + 1;
                if (foodFound > 90) {
                    currentFood += foodFound
                    survivor.energy - 50

                    console.log(`After hunting a large bear you gather ${foodFound} lbs of food.`)
                } else if (foodFound > 80 && foodFound < 90) {
                    currentFood += foodFound
                    survivor.energy - 50

                    console.log(`After hunting a large deer you gather ${foodFound} lbs of food.`)
                } else if (foodFound > 50 && foodFound < 80) {
                    currentFood += foodFound
                    survivor.energy - 50

                    console.log(`After hunting a decently sized deer you gather ${foodFound} lbs of food`)
                } else if (foodFound > 20 && foodFound < 50) {
                    currentFood += foodFound
                    survivor.energy - 50

                    console.log(`After hunting a wolf you gather ${foodFound} lbs of food`)
                } else {
                    currentFood += foodFound
                    survivor.energy - 50

                    console.log(`After hunting a small animal you gather ${foodFound} lbs of food`)
                }
            } else {
                survivor.energy - 50;

                console.log('You could not find any food')
            }
        }
    }
}

function cannibalize(survivor, cannibal) {
    if (survivor.isDead) {
        currentFood + 100
        cannibal.energy - 100
        cannibal.thirst - 40
        
        console.log(`You have done unspeakable things today.. There is no turning back.`)
    } else if (!survivor.isDead) {
        survivor.isDead = true;
        survivor.health = 0;
        currentFood + 100;
        cannibal.energy - 100;
        cannibal.thirst - 40;
        cannibal.health - 40;

        console.log(`After a long hard fought struggle, ${cannibal.name} finally overcomes ${survivor.name} and kills thems for food.`)
    } else {
        console.log(`something went wrong..`)
    }
}

function buildShelter(survivor) {
    if (!shelter) {
        survivor.energy - 80;
        survivor.hunger - 50;
        survivor.thirst - 75;

        shelter = true;

        console.log(`${survivor.name} built a shelter.`)
    } else {
        console.log(`There is already a built shelter`)
    }
}

