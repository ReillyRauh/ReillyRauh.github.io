export const animals = ['Ean Farmington', 'Black Bear', 'Brown Bear', 'Starving Survivor', 'Cannibal', 'Barack Obama', 'Wolf', 'Polar Bear', 'Jesus Christ', 'the Holy Spirit'];

export const pickAnimal = () => {
    const randomNumberAnimal = Math.floor(Math.random() * animals.length);

    return animals[randomNumberAnimal];
}

export const disasters = ['F1 Tornado', 'Flood', 'Hailstorm', 'Category 1 Hurricane', 'Category 2 Hurricane', 'Category 3 Hurricane', 'Category 4 Hurricane', 'Category 5 Hurricane', 'F2 Tornado', 'F3 Tornado', 'F4 Tornado', 'F5 Tornado'];

export const pickDisaster = () => {
    const randomNumberDisaster = Math.floor(Math.random() * disasters.length);

    return disasters[randomNumberDisaster];
}