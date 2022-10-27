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

function feedBetter({name, age, speed}) {
    // const {name, age, hello, speed} = animal;
    return `Name is ${name} and age is ${age}, and speed  ${speed}`;
}



console.log(feed(turtle));
console.log(feedBetter(turtle));