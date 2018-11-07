const myStr: string = 'some string';

// myStr = 'another string';
const array: Array<boolStrNum> = ['cat', 'dog', 'horse'];
const array1: boolStrNum[] = ['cat', 'dog', 'horse'];


array.push(234);
array.push(true);

type boolStrNum = boolean | string | number;

const first = array[0];

function isString(value: any): value is string {
  return typeof value === 'string';
}


if (isString(first)) {

}


interface IUser {
  firstName: string;
  email?: string;
}


const u: IUser = {
  firstName: 'Jason'
};

u.email = 'email'

// u.lastName = ''

// function User(firstName, email) {
//   this.firstName = firstName;
//   this.email = email;
// }

class User {
  constructor(public firstName: string, public email: string) {
  }

  protected sayHello(name: string): string {
    console.log(`Hello ${name} from ${this.firstName}`);

    return 'string'
  }
}

const user = new User('Bob', 'bob@bob.com');

// user.sayHello('Sally');

class Person extends User {

  constructor(name: string, email: string, public age: number = 10) {
    super(name, email);
    this.sayHello('Bob');
  }
}

const person = new Person('Sally', 'sally@sally.com');
