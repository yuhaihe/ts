// class Point {
//   public static age: number = 18;
//   // ! 非空断言
//   public z!: number;
//   public readonly i: number = 100;
//   protected k!: number;
//   private y: number;
//   private x: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }

//   public getName(): number {
//     this.z = this.x + this.y;
//     return this.z;
//   }

//   public getAge() {
//     return Point.age;
//   }

//   private updataX(): void {
//     this.x = this.x * 2;
//   }

// }

// const point = new Point(1, 2);
// console.log(point.getAge());

// interface FoodInterface {
//   type: string;
// }

// class FoodClass implements FoodInterface {
//   constructor(public type: string) {
//     this.type = type;
//   }
// }

const create = <T>(c: new () => T): T => {
  return new c();
}
class Info {
  public age: number = 20;
}

console.log(create(Info).age);
