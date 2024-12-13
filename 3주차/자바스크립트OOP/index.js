// 클래스 선언
class Car {
  // 프라이빗 속성
  name;
  speed;
  wheels;

  // 생성자 함수
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
    this.wheels = 4;
    this.door = 4;
  }

  // 프라이빗 메서드

  setSpeed(speed) {
    if (typeof speed !== "number" || speed < 0) {
      console.log("숫자가 아닙니다.");
      return;
    }
    this.speed = speed;
  }

  get spec() {
    return [this.name, this.speed];
  }

  set spec(data) {
    [this.name, this.speed] = data;
  }

  // hourDistance(hour) {
  //   return this.speed * hour;
  // }

  hourDistance = (hour) => {
    return this.speed * hour;
  };

  // 메서드
  drive() {
    console.log("drive " + this.name + " " + this.speed + " " + this.wheels);
  }
}

let casper = new Car("casper", 100);

casper.spec = ["Model S", 300];
// console.log(casper.spec);

casper.setSpeed(400);

// casper.drive();

//에로우 함수 선인시 instance 타입으로 변경 된다.

// 상속
class SportCar extends Car {
  constructor(name, speed, door) {
    // 부모 클래스 생성자 함수 호출
    super(name, speed);
    this.door = door;
    this.turboEngine = true;
  }

  hourDistance(hour) {
    super.hourDistance(hour);
    console.log(super.hourDistance(hour) * 1.2);
  }
}

let car1 = new Car("sonata", 200);
let car2 = new Car("avante", 180);

console.log(car1.hourDistance === car2.hourDistance);

let sportsCar = new SportCar("R8", 300, 2);

console.log(sportsCar.hourDistance(2));
