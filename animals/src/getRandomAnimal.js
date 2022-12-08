function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog' , 'alligator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}
export default getRandomAnimal;