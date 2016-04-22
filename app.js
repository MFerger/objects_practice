var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};
var Beth = {
    firstname: 'Beth',
    lastname: 'Flinstone',
    address: {
        street: '234 Main St.',
        city: 'New York',
        state: 'NY'
    }
};
var Bob = {
    firstname: 'Bob',
    lastname: 'Barker',
    address: {
        street: '123 Main St.',
        city: 'New York',
        state: 'NY'
    }
};
function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);
greet(Bob);
greet(Beth);

greet({
    firstname: 'Mary',
    lastname: 'Doe'
});

Tony.address2 = {
    street: '333 Second St.'
}
