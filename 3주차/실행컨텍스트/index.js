// const hellobit = {
//   name: 'hellobit',
//   age: 20,
//   introduce() {
//     console.log(`안녕하세요, 저는 ${this.name}이고 ${this.age}살입니다.`);
//   }
// }
// 실행컨텍스트
// hellobit.introduce();

// const hellobit = {
//   name: '철수',
//   age: 20,
// }

// const testData = {
//   name: '영희',
//   age: 22,
// }

// const testData2 = {
//   name: '숙희',
//   age: 23,
// }

// function introduce(a, b) {
//   console.log(`안녕하세요, 저는 ${this.name}이고 ${this.age}살입니다. 성별은 ${a}이고, 취미는 ${b}입니다.`);
// }

// 실행컨텍스트
// 함수 호출 방식에 따라 실행컨텍스트가 달라짐
// apply : 함수 호출 시 첫번째 인자는 실행컨텍스트, 두번째 인자는 인자 배열
// call : 함수 호출 시 첫번째 인자는 실행컨텍스트, 두번째 인자는 인자 배열
// bind : 함수 호출 시 첫번째 인자는 실행컨텍스트, 두번째 인자는 인자 배열
// 모두 함수를 호출하는 것이지만 실행컨텍스트가 다름
// introduce.apply(hellobit, ['남', '코딩']);
// introduce.call(testData, '여', '영화');
// introduce.bind(testData2)('남', '코딩');

// function func1(callfunc) {
//   const result = callfunc();
//   return result * result;
// }

// const data = {
//   a: 5,
//   b: 3,
//   // 일반 함수는 실행컨텍스트가 바인딩됨
//   // bind를 사용하여 실행컨텍스트를 바인딩해줘야 함
//   // caculate() {
//   //   return func1(function() {
//   //     return this.a + this.b;
//   //   }.bind(this));
//   // }
//   // 화살표 함수는 실행컨텍스트가 바인딩되지 않음
//   // 따라서 this를 사용할 때 실행컨텍스트를 바인딩해줘야 함
//   caculate() {
//     return func1(() => {
//       return this.a + this.b;
//     });
//   }
// }

// console.log(data.caculate());

// const data = {
//   a: 1,
//   b: 2,
//   c: 3,
// }

// console.log(Object.entries(data));