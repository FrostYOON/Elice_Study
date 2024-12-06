let a = 123.1231234;

// console.log(a.toString(2)); // 2진수
// console.log(a.toString(8)); // 8진수
// console.log(a.toString(16)); // 16진수

// console.log(a.toFixed(2)); // 소수점 2자리까지 표현

// console.log(a.toExponential(2)); // 지수표현

// console.log(a.toLocaleString()); // 지역표현

// console.log(a.toPrecision(2)); // 유효숫자 2자리까지 표현

// console.log(a.valueOf()); // 원시값 반환

// 배열 중 최대값 반환
// function maxOfArr(arr) {
//   return Math.max(...arr);
// }

// 배열 중 최소값 반환
// function minOfArr(arr) {
//   return Math.min(...arr);
// }

// console.log(Math.abs(-123)); // 절대값
// console.log(Math.ceil(1.1)); // 올림
// console.log(Math.floor(1.9)); // 내림
// console.log(Math.round(1.5)); // 반올림
// console.log(Math.random()); // 랜덤값
// console.log(Math.sign(-123)); // 부호
// console.log(Math.sqrt(9)); // 제곱근
// console.log(Math.cbrt(27)); // 세제곱근
// console.log(Math.pow(x, y)); // 제곱 (x : 밑, y : 지수)
// console.log(Math.max(1, 2, 3, 4, 5)); // 최대값
// console.log(Math.min(1, 2, 3, 4, 5)); // 최소값
// console.log(Math.PI); // 원주율
// console.log(Math.E); // 자연상수
// console.log(Math.LN10); // 10의 자연로그
// console.log(Math.LN2); // 2의 자연로그
// console.log(Math.LOG10E); // 10을 밑으로 하는 자연로그
// console.log(Math.LOG2E); // 2를 밑으로 하는 자연로그

// 오늘 날짜 반환
// console.log(new Date());

// 특정 날짜 반환
// console.log(new Date("2024-12-06"));

// 특정 날짜 반환 (밀리초)
// console.log(new Date(1717564800000));

// 특정 날짜 반환 (년, 월, 일, 시, 분, 초, 밀리초)
// console.log(new Date(2024, 11, 6, 12, 30, 0, 0));

// let day = new Date();
// console.log(day.getFullYear()); // 년 (4자리)
// console.log(day.getMonth()); // 월 (0 ~ 11)
// console.log(day.getDate()); // 일 (1 ~ 31)
// console.log(day.getDay()); // 요일 (0 ~ 6)
// console.log(day.getHours()); // 시 (0 ~ 23)
// console.log(day.getMinutes()); // 분 (0 ~ 59)
// console.log(day.getSeconds()); // 초 (0 ~ 59)
// console.log(day.getMilliseconds()); // 밀리초 (0 ~ 999)

// 문자열 반환
// console.log("asdfg".charAt(0)); // 문자열 중 특정 인덱스 문자 반환
// console.log("asdfg".charCodeAt(0)); // 문자열 중 특정 인덱스 문자의 유니코드 반환
// console.log("asdfg".concat("hijk")); // 문자열 연결
// console.log("asdfg".includes("a")); // 문자열 포함 여부
// console.log("asdfg".indexOf("a")); // 문자열 중 특정 문자 인덱스 반환
// console.log("asdfg".lastIndexOf("a")); // 문자열 중 특정 문자 인덱스 반환 (뒤에서부터)
// console.log("asdfg".slice(0, 3)); // 문자열 중 특정 인덱스 범위 반환
// console.log("asdfg".split("")); // 문자열 중 특정 문자 기준 배열 반환
// console.log("asdfg".substring(0, 3)); // 문자열 중 특정 인덱스 범위 반환
// console.log("asdfg".toUpperCase()); // 문자열 대문자 변환
// console.log("asdfg".toLowerCase()); // 문자열 소문자 변환
// console.log("asdfg".trim()); // 문자열 양쪽 공백 제거
// console.log("asdfg".replace("a", "b")); // 문자열 중 특정 문자 변환
// console.log("asdfg".replaceAll("a", "b")); // 문자열 중 특정 문자 모두 변환
// console.log("asdfg".repeat(3)); // 문자열 반복
// console.log("asdfg".split("").reverse().join("")); // 문자열 뒤집기
// console.log("asdfg".endsWith("g")); // 문자열 끝 확인
// console.log("asdfg".startsWith("a")); // 문자열 시작 확인

// 문자열 포맷
console.log(String.raw`\n`); // 원시 문자열

// JSON
let data = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(JSON.stringify(data)); // JSON 문자열 변환 (serializer : 직렬화)
console.log(JSON.parse(JSON.stringify(data))); // JSON 객체 변환 (deserializer : 역직렬화)
