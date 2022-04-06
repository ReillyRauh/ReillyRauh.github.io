export const animals = ['Ean Farmington', 'Black Bear', 'Brown Bear', 'Starving Survivor', 'Cannibal', 'Barack Obama', 'Wolf', 'Polar Bear', 'Jesus Christ', 'the Holy Spirit'];

export const pickAnimal = () => {
    let randomNumberAnimal = Math.floor(Math.random() * animals.length);

    return animals[randomNumberAnimal];
}