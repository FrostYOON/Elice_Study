var str;
str = '123';
var arr = [];
var person = { name: 'John', age: 20 };
var user = { name: 'John', age: 20 };
arr.push('123');
function func1(a, b) {
    return a + b;
}
var result = func1(1, 2);
function func3(a, b, c) {
    console.log(a, b, c);
}
function func4(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log(rest);
}
func3(1, 2);
func4(1, 2, 3, 4, 5);
var sum = function (a, b) {
    return a + b;
};
sum(1, 2);
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
