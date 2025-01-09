let str: string;

str = '123';

let arr: string[] = [];

type Person = {
  name: string;
  age: number;
};

type Sum = (a: number, b: number) => number;

let person: Person = { name: 'John', age: 20 };

interface User {
  name: string;
  age: number;
}

let user: User = { name: 'John', age: 20 };

arr.push('123');

function func1(a: number, b: number): number {
  return a + b;
}

let result: number = func1(1, 2);

function func3(a: number, b: number, c?: number) {
  console.log(a, b, c);
}

function func4(a: number, ...rest: number[]) {
  console.log(rest);
}

func3(1, 2);
func4(1, 2, 3, 4, 5);

const sum: Sum = (a, b) => {
  return a + b;
};

sum(1, 2);

enum Food {
  한식,
  일식,
  파스타,
  중식 = 10,
  양식
}

console.log(Food);

interface Animal {
  makeSound(): void;
}

interface Mammal {
  legs: number;
}

class BullDog implements Animal, Mammal {
  legs: number = 4;
  makeSound() {
    console.log('멍멍');
  }
}

abstract class Animal2 {
  abstract makeSound(): void;
}

class Whale extends Animal2 implements Mammal {
  legs: number = 0;
  makeSound() {
    console.log('우우');
  }
}

class Dog extends Animal2 {
  makeSound(): void {
    console.log('멍멍');
  }
}

const dog = new Dog();
dog.makeSound();
const bullDog = new BullDog();
bullDog.makeSound();
console.log(bullDog.legs);
// // string : 문자열
// let str: string = '123';

// // number : 숫자
// let num: number = 123;

// // boolean : 불리언
// let bool: boolean = true;

// // array : 배열
// let arr: number[] = [1, 2, 3];

// // object : 객체
// let obj: { name: string; age: number } = { name: 'John', age: 20 };

// // tuple : 고정된 길이의 배열
// let tuple: [number, string] = [1, '2'];

// // enum : 열거형
// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// // any : 모든 타입을 허용
// let any: any = '123';

// // void : 반환 값이 없는 함수
// function func2(): void {
//   console.log('123');
// }

// // union : 두 타입 중 하나
// let union: number | string = 123;

// // intersection : 두 타입을 합친 타입
// let intersection: { a: number } & { b: string } = { a: 1, b: '2' };

// // unknown : 알 수 없는 타입
// let unknown: unknown = '123';

// // never : 종료되지 않는 함수
// function func3(): never {
//   throw new Error('123');
// }

// alias
// type Name = string;
// let name: Name = 'John';

// type Age = number;
// let age: Age = 20;

// type Person = {
//   name: Name;
//   age: Age;
// };

// let person: Person = { name: 'John', age: 20 };

// readonly
// type ReadonlyUser = {
//   readonly name: string;
//   readonly age: number;
// };

// const arr: readonly number[] = [1, 2, 3];

// const tuple: readonly [number, string] = [1, '2'];
