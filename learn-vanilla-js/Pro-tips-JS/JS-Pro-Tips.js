// Debugging JavaScript
const foo = {
    name: 'John',
    age: 40,
    nervous: false
};
const bar = {
    name: 'Doe',
    age: 33,
    nervous: true
};
const baz = {
    name: 'Bill',
    age: 25,
    nervous: false
};

//Bad Code 💩
console.log(foo);
console.log(bar);
console.log(baz);

//Good Code ✅
console.log("%c My friends", "color: purple; font-weight: bold;")
console.log({
    foo,
    bar,
    baz
});

console.table([foo, bar, baz]);

// Console timer
console.time('looper');

let i = 0;
while (i < 100000) {
    i++;
}

console.timeEnd('looper');

// Stack trace logs
const deleteMe = () => console.trace('bye bye database 🥺');

deleteMe();


// Destructuring
const turtle = {
    name: 'Brown 🐢',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

//Bad Code 💩
function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

//Good Code ✅
function feedSmart({
    name,
    meal,
    diet
}) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}
// OR
function feedSmartAlt(animal) {
    const {
        name,
        meal,
        diet
    } = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

// Template literals
const horse = {
    name: "Topher 🐎",
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
};

// Bad String Code 💩
let bio = horse.name + 'is a ' + horse.size + ' horse skilled in ' + horse.skills.join(" & ");

// Good string code ✅
const {
    name,
    size,
    skills
} = horse;

bio = `${name} is a ${size} skilled in ${skills.join(" & ")}`;

console.log(bio);

// Advanced tag example

function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge `This horse is ${horse.age}`;

// Spread syntax

const pikachu = {
    name: 'Pikachu 🐹'
};
const stats = {
    hp: 40,
    attack: 60,
    defense: 45
}

// Bad Code 💩
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

// OR

const lvl10 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, {
    hp: 45
});

// Good code ✅
const level10 = {
    ...pikachu,
    ...stats
};

const level1 = {
    ...pikachu,
    hp: 45
};

// Arrays
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

// Bad Code 💩
pokemon.push('Bulbasaur');
pokemon.push('Metapod');
pokemon.push('Weedle');

// Good code ✅
// Push
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];

// Unshift
pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon];

// Loops

const orders = [500, 30, 99, 15, 223]

// Bad Code 
const total = 0;
const withTax = [];
const highValue = [];
for (i = 0; i < orders.length; i++) {
    //Reduce
    total += order[i];

    //Map
    withTax.push(orders[i] * 1.1);

    // Filter
    if (order[i] > 100)
        highValue.push(orders[i]);
}

// Good Code 
// Reduce
const total = orders.reduce((acc, curr) => acc + curr, 0);

// Map
const withTax = orders.map(v => v * 1.1);

// Filter
const highValue = orders.filter(o => o > 100);

// Async await

const random = () => {
    return Promise.resolve(Math.random());
}

// Bad promise code 
const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;

    return random()
        .then(v => {
            first = v;
            return random();
        })
        .then(v => {
            second = v;
            return random();
        })
        .then(v => {
            third = v;
            return first + second + third;
        })
        .then(v => console.log(`Result ${v}`));
};

// Good promise code

const sumRandomAsyncNumsSmart = async () => {
    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`);
}