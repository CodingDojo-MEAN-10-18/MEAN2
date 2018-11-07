const myStr = 'some string';
// myStr = 'another string';
const array = ['cat', 'dog', 'horse'];
const array1 = ['cat', 'dog', 'horse'];
array.push(234);
array.push(true);
const first = array[0];
function isString(value) {
    return typeof value === 'string';
}
if (isString(first)) {
}
const u = {
    firstName: 'Jason'
};
u.email = 'email';
// u.lastName = ''
// function User(firstName, email) {
//   this.firstName = firstName;
//   this.email = email;
// }
class User {
    constructor(firstName, email) {
        this.firstName = firstName;
        this.email = email;
    }
    sayHello(name) {
        console.log(`Hello ${name} from ${this.firstName}`);
    }
}
const user = new User('Bob', 'bob@bob.com');
// user.sayHello('Sally');
class Person extends User {
    constructor(name, email, age = 10) {
        super(name, email);
        this.age = age;
        this.sayHello('Bob');
    }
}
const person = new Person('Sally', 'sally@sally.com');
