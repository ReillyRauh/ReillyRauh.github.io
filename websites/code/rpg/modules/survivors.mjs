export { Clarissa, Ching, Bob, Sam, Osama, Survivor }

import * as Survivor from './survivors.mjs';
import * as gather from './gatheringFunctions.mjs';

let currentFood = gather.currentFood
let currentWater = gather.currentWater

class Survivor {
    constructor(name) {
        this._name = name,
        this._health = 100,
        this._energy = 100,
        this._hunger = 100,
        this._thirst = 100,
        this._isDead = false
        this._task = ''
    }
    
    get name() {
        return this._name
    }
    
    get health() {
        return this._health
    }
    
    get energy() {
        return this._energy
    }
    
    get thirst() {
        return this._thirst
    }

    get hunger() {
        return this._hunger
    }
    
    get isDead() {
        return this._isDead
    }

    get task() {
        return this._task
    }

    Kill() {
        if (this._isDead === false) {
          this._isDead = true
          this._health = 0  
        } else {
            return `This person is already dead`
        }
    }

    removeHealth(number) {
        this._health - number
    }

    removeEnergy(number) {
        this._energy - number
    }

    removeThirst(number) {
        this._thirst - number
    }

    removeHunger(number) {
        this._hunger - number
    }

    giveTask(task) {
        let potentialTasks = ['Find Water', 'Find Food', 'Build Shelter', 'Cannibalize']
        let taskImproper = true;

        for (let i = 0; i > potentialTasks.length; i++) {
            if (potentialTasks[i] === task) {
                taskImproper = false;
            } else {
                taskImproper = true;
            }
        }

        if (!taskImproper) {
            this._task = task
        } else if (taskImproper) {
            console.log('Task input improper or empty, setting random Task..')
            var getTask = Math.floor(Math.random() * potentialTasks.length) + 1;
            const newTask = potentialTasks[getTask];

            this._task = newTask;
            console.log(`${this._name}'s task is now set to ${this._task}`)
        }
    }

    eat() {
        if (this._hunger < 100) {
            if (currentFood > 0) {
                let useableFood = currentFood * 10;
                let eatAmount = useableFood - this._hunger;
                let lesserEat = this._hunger - useableFood;
    
                if (eatAmount > 0) {
                    this._hunger += eatAmount;
                } else if (lesserEat > 0) {
                    this._hunger += lesserEat
                } else {
                    console.log(`Your current food is ${useableFood} slabs of meat, get more food to eat!`)
                }
            }
        }
    }
}

const Clarissa = new Survivor('Clarissa');
const Bob = new Survivor('Bob');
const Sam = new Survivor('Sam');
const Ching = new Survivor('Ching');
const Osama = new Survivor('Osama');