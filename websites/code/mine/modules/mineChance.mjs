export { PickAxe, Rock, mine }

class PickAxe {
    constructor(name, type) {
        this._name = name,
        this._type = type
    }

    get name() {
        return this._name
    }

    get type() {
        return this._type
    }
}

class Rock {
    constructor(name, rarity, requirement) {
        this._name = name,
        this._rarity = rarity,
        this._requirement = requirement
    }

    get name() {
        return this._name
    }

    get chance() {
        let chance = '0%'

        if (rarity === 'Common') {
            chance = '80%'
            return chance
        } else if (rarity === 'Uncommon') {
            chance = '65%'
            return chance
        } else if (rarity === 'Rare') {
            chance = '45%'
            return chance
        } else if (rarity === 'Very Rare') {
            chance = '25%'
            return chance
        } else if (rarity === 'Extremely Rare') {
            chance = '5%'
            return chance
        } else {
            return `ERR: Invalid input, you input ${this._rarity}, please input one of the following ['Common', 'Uncommon', 'Rare', 'Very Rare', 'Extremely Rare']`
        }
    }

    get requirement() {
        this._requirement
    }
}

export let stone = new Rock('Stone', 'Common', 'Any')
export let coal = new Rock('Coal', 'Uncommon', 'Any')
export let iron = new Rock('Iron', 'Uncommon', 'Any')
export let emerald = new Rock('Emerald', 'Rare', 'Any')
export let diamond = new Rock('Diamond', 'Very Rare', 'Any')
export let hardenedSteel = new Rock('Hardened Steel', 'Extremely Rare', 'Any')

function mine(PickAxe) {
    let calcChance = Math.floor(Math.random() * 100)
    let coinFlip = Math.floor(Math.random() * 2)

    if (calcChance > 0 && calcChance < 100 && calcChance <! 5 && calcChance <! 25 && calcChance <! 45 && calcChance <! 65) {
        return `You mined ${stone.name}`
    } else if (calcChance > 0 && calcChance < 65 && calcChance <! 5 && calcChance <! 25 && calcChance <!45) {
        if (coinFlip === 1) {
            return `You mined ${coal.name}`
        } else {
            return `You mined ${iron.name}`
        }
    } else if (calcChance > 0 && calcChance < 45 && calcChance <! 5 && calcChance <! 25) {
        return `You mined ${emerald.name}`
    } else if (calcChance > 0 && calcChance < 25 && calcChance <! 5) {
        return `You mined ${diamond.name}`
    } else if (calcChance > 0 && calcChance < 5) {
        return `You mined ${hardenedSteel.name}`
    } else {
        return 'No luck!'
    }
}

console.log(mine('stone'))