const turtle = {
    name: 'tutty',
    age: 110,
    speed: 'bullet'
}


// Shit code
function feed(animal) {
    return `Name is ${animal.name} ${animal.age}`;
}

// Best method

function feedBetter(animal) {
    const {name, age} = animal;
    return `Name is ${name} and age is ${age}`;
}

console.log(feed(turtle));