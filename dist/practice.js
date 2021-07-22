"use strict";
// # 기본 타입 
// let count = 0; // 숫자
// count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
var person = {
    name: '김사람'
};
var expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
var people = [person, expert];
var color = 'red';
var colors = ['red', 'orange'];
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
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);
