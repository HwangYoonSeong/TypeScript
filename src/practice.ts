// # 기본 타입 
// let count = 0; // 숫자
// count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

// const message: string = 'hello world'; // 문자열

// const done: boolean = true; // 불리언 값

// const numbers: number[] = [1, 2, 3]; // 숫자 배열
// const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1); // 숫자 넣으려고 하면.. 안된다!

// let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
// let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

// let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
// color = 'yellow';
// color = 'green'; // 에러 발생!

//////////////////////////////////////////////////////////////////////////////////////
// # 함수에서 타입 정의 
// function sum(x: number, y: number): number {
//     return x + y;
// }

// sum(1, 2);

// function sumArray(numbers: number[]): number {
//     return numbers.reduce((acc, current) => acc + current, 0);
// }

// const total = sumArray([1, 2, 3, 4, 5]);


// function returnNothing(): void {
//     console.log('I am just saying hello world');
// }

//////////////////////////////////////////////////////////////////////////////////////
// # Interface 사용 

// Shape 라는 interface 를 선언합니다.
interface Shape {
    getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.

    radius: number; // 멤버 변수 radius 값을 설정합니다.

    constructor(radius: number) {
        this.radius = radius;
    }

    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

// shapes.forEach(shape => {
//     console.log(shape.getArea());
// });

//////////////////////////////////////////////////////////////////////////////////////
// # 일반 객체를 interface로 타입 설정

// interface Person {
//     name: string;
//     age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
// }
// interface Developer extends Person {
//     skills: string[];
// }

// const person: Person = {
//     name: '김사람',
//     age: 20
// };

// const expert: Developer = {
//     name: '김개발',
//     skills: ['javascript', 'react']
// };

// const people: Person[] = [person, expert];

//////////////////////////////////////////////////////////////////////////////////////
// # Type Alias 사용하기 

type Person = {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer = Person & {
    skills: string[];
};

const person: Person = {
    name: '김사람'
};

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};

type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

// 우리가 이번에 type 과 interface 를 배웠는데,
// 어떤 용도로 사용을 해야 할까요? 
// 무엇이든 써도 상관 없는데 일관성 있게만 쓰시면 됩니다.
// 구버전의 타입스크립트에서는 type 과 interface 의 차이가 많이 존재했었는데
// 이제는 큰 차이는 없습니다. 
// 다만 라이브러리를 작성하거나 다른 라이브러리를 위한 
// 타입 지원 파일을 작성하게 될 때는 
// interface를 사용하는것이 권장 되고 있습니다.

//////////////////////////////////////////////////////////////////////////////////////
// # Generics 

// 어떤 타입이 올 지 모르는 상황에서는 any 타입 

// function merge(a: any, b: any): any {
//     return {
//         ...a,
//         ...b
//     };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });

//그런데, 이렇게 하면 타입 유추가 모두 깨진거나 다름이 없음

// 이런 상황에서 Generics 사용 
function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    };
}

const merged = merge({ foo: 1 }, { bar: 1 });
// console.log(merged);

function wrap<T>(param: T) {
    return {
        param
    }
}

const wrapped = wrap(10);

// interface에서 Generics 사용 
interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
};

// type 에서 Generics 사용하기
type Items2<T> = {
    list: T[];
};

const items2: Items<string> = {
    list: ['a', 'b', 'c']
};

// 클래스에서 Generics 사용 
class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());