// naming convention

// 변수 및 함수 : camelCase
// let namingConvention = "변수 명명 규칙"; // 변수
// let namingConvention2 = "변수 명명 규칙"; // 변수
// const namingConvention3 = "변수 명명 규칙"; // 상수

// snake_case
// let snake_case = "변수 명명 규칙";

// 함수 선언 방식 3가지

// function tempFunction(x) {
//   return x;
// }

// let tempFunction2 = function(x) {
//   return x;
// }

// let tempFunction3 = (x) => {
//   return x;
// }

// 상수 : CAPITAL_CASE
// const TEMP_VARIABLE = "상수 명명 규칙";

// 클래스 및 생성자 함수 : PascalCase
// class TempClass {
//   constructor(x) {
//     this.x = x;
//   }
// }

// function TempFunction() {
//   this.x = x;
// }

// Primitive Type : 원시 타입 - 값을 직접 변경, 변수에 직접 할당
// 숫자형, 문자열, 불리언, undefined, null
// let tempNumber = 10;
// let tempString = "Hello World";
// let tempBoolean = true;
// let tempUndefined;
// let tempNull = null;

// Reference Type : 참조 타입 - 값을 직접 변경하는 것이 아니라 참조를 통해 변경, 변수에 참조 주소를 할당
// 배열, 객체, 함수
// let tempArray = [1, 2, 3];
// let tempObject = { name: "John", age: 20 };
// let tempFunction = function() {
//   return "Hello World";
// }

// 문자열 메서드
// let str = "Hello World";
// str.toUpperCase(); // 문자열 대문자로 변환
// str.toLowerCase(); // 문자열 소문자로 변환
// str.indexOf("o"); // 문자열에서 찾고자 하는 문자의 인덱스 반환 (없으면 -1 반환)
// str.includes("o"); // 문자열에서 찾고자 하는 문자가 있는지 확인 (있으면 true, 없으면 false 반환)
// str.slice(0, 4); // 문자열 자르기 (시작 인덱스, 끝 인덱스)
// str.split(" "); // 문자열 분리 (구분자)
// str.replace("Hello", "Hi"); // 문자열 변경 (찾을 문자, 바꿀 문자)
// str.trim(); // 문자열 양쪽 공백 제거
// str.repeat(3); // 문자열 반복 (반복 횟수)
// str.charAt(0); // 문자열에서 특정 인덱스의 문자 반환 (인덱스 범위 초과 시 빈 문자열 반환)
// str.charCodeAt(0); // 문자열에서 특정 인덱스의 문자 유니코드 반환 (인덱스 범위 초과 시 NaN 반환)
// str.concat("Hi"); // 문자열 연결
// str.endsWith("d"); // 문자열이 특정 문자로 끝나는지 확인 (끝나면 true, 안 끝나면 false 반환)
// str.startsWith("H"); // 문자열이 특정 문자로 시작하는지 확인 (시작하면 true, 안 시작하면 false 반환)
// str.length; // 문자열 길이 반환
// str.padStart(10, "0"); // 문자열 앞에 특정 문자 추가 (총 길이, 추가할 문자)
// str.padEnd(10, "0"); // 문자열 뒤에 특정 문자 추가 (총 길이, 추가할 문자)

// let str = "10";
// parseInt(str); // 문자열을 정수로 변환
// parseFloat(str); // 문자열을 실수로 변환

// let num = 10;
// num.toString(); // 숫자를 문자열로 변환
// num.toFixed(2); // 숫자를 소수점 자리수까지 표현
// num.toExponential(2); // 숫자를 지수 표현
// num.toPrecision(2); // 숫자를 소수점 자리수까지 표현
// num.valueOf(); // 숫자를 원시 값으로 변환
// num.toLocaleString(); // 숫자를 지역 표기법으로 변환

// 배열 선언 방식
// var arr = [1, 2, 3];

// 배열 메서드
// var fruit = ["사과", "바나나", "딸기"];

// push : 배열 마지막에 요소 추가
// fruit.push("포도");
// console.log(fruit);

// unshift : 배열 처음에 요소 추가
// fruit.unshift("라임");
// console.log(fruit);

// pop : 배열 마지막 요소 제거
// var popFruit = fruit.pop();
// console.log(fruit, popFruit);

// shift : 배열 처음 요소 제거
// var shiftFruit = fruit.shift();
// console.log(fruit, shiftFruit);

// Math 메서드
// var abs = Math.abs(-10);
// var ceil = Math.ceil(1.1);
// var floor = Math.floor(1.9);
// var round = Math.round(1.5);
// var random = Math.random();

// console.log('abs : ', abs, ', ceil : ', ceil, ', floor : ', floor, ', round : ', round, ', random : ', random);

// parseInt
// var num = parseInt(20.6);
// console.log(typeof(num), num);

// parseFloat
// var num = parseFloat(20.0);
// console.log(typeof(num), num);

// 문자열 타입 변환
// var test = 20;
// var test2 = "20";
// console.log(typeof(test), test);
// console.log(typeof(test2), test2);

// 산술 연산자
// var test = '10';
// var test2 = '20';
// console.log(test + test2);
// console.log(test - test2);
// console.log(test * test2);
// console.log(test / test2);
// console.log(test % test2);

// 증감 연산자
// var test = 10;
// console.log(test++); // 후위 연산자 : 연산 후 증가
// console.log(test);
// console.log(++test); // 전위 연산자 : 연산 전 증가
// console.log(test);
// console.log(test--); // 후위 연산자 : 연산 후 감소
// console.log(test);
// console.log(--test); // 전위 연산자 : 연산 전 감소
// console.log(test);
// console.log(test += 1); // 더하기 연산자
// console.log(test);
// console.log(test -= 1); // 빼기 연산자
// console.log(test);
// console.log(test *= 2); // 곱하기 연산자
// console.log(test);
// console.log(test /= 2); // 나누기 연산자
// console.log(test);
// console.log(test %= 2); // 나머지 연산자
// console.log(test);

// 비교 연산자
// var test = 10;
// var test2 = 20;
// console.log(test == test2); // 같다
// console.log(test != test2); // 같지 않다
// console.log(test === test2); // 같다
// console.log(test !== test2); // 같지 않다

// console.log(test > test2); // 크다
// console.log(test < test2); // 작다
// console.log(test >= test2); // 크거나 같다
// console.log(test <= test2); // 작거나 같다

// 논리 연산자
// var test = true;
// var test2 = false;
// // && : 둘 다 true일 때 true
// console.log(test && test2);

// // || : 둘 중 하나라도 true일 때 true
// console.log(test || test2);

// // ! : true는 false, false는 true로 변환
// console.log(!test);

// 조건문
// if문
// var test = 10;
// if (test > 0) {
//   console.log("양수");
// } else {
//   console.log("음수");
// }

// if else if else문
// var test = 10;
// if (test > 0) {
//   console.log("양수");
// } else if (test < 0) {
//   console.log("음수");
// } else {
//   console.log("0");
// }

// 삼항 연산자
// 조건 ? 조건이 참일 때 실행 : 조건이 거짓일 때 실행
// var test = 10;
// var result = test > 0 ? "양수" : "음수";
// console.log(result);

// var result = test > 0 ? "양수" : test < 0 ? "음수" : "0";
// console.log(result);

// 중첩 if문
// var test = 10;
// if (test > 0) {
//   if (test % 2 == 0) {
//     console.log("양수 짝수");
//   } else {
//     console.log("양수 홀수");
//   }
// }

// switch문
// var test = 1;
// switch (test) {
//   case 1:
//     console.log("1");
//     break;
// }

// 반복문
// for문 (선언부 및 초기화 ; 조건부 ; 증감부)
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// while문 (조건부) { 실행부 ; 증감부;}
//무한 루프 조심!!
// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do while문 do { 실행부 ; 증감부;} while(조건부);
// do 우선 실행 후 while 조건 검사
// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// break문
// for (var i = 0; i < 10; i++) {
//   if (i == 3) break;
//   console.log(i);
// }

// continue문
// for (var i = 0; i < 10; i++) {
//   if (i == 3) continue;
//   console.log(i);
// }

// 배열 메서드
// arr.forEach((item) => console.log(item));

// arr.forEach((item, index) => console.log(item, index));

// arr.map((item) => console.log(item));

// arr.map((item, index) => console.log(item, index));

// arr.filter((item) => console.log(item));

// 짝수와 홀수 구분
// var arr = [1, 2, 3, 4, 5];

// var evenNumbers = arr.filter((item) => item % 2 === 0);
// var oddNumbers = arr.filter((item) => item % 2 === 1);

// console.log(evenNumbers, oddNumbers);