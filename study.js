var name = prompt("이름을 입력하세요")
document.write("<b><big>"+name+"</big></b>님 환영합니다.") 
//  이름, ~님 어서오세요 출력

console.log("콘솔창에 출력") // 콘솔창에 출력

prompt(" 나이를 입력하세요", "27")

// 변수 let 
let name = "juwon";
console.log(name);
name = "juwon";
console.log(name);

// 블록스코프 var 전역 함수 let 으로 선언하면 error 발생
if (true) {
    var message = "byebye";
}
console.log(message)

// 선언전에 사용 가능
function testVar() {
    message = "bye"
    console.log(message)
    var message
}

testVar()

// 상수 const
const name = "juwon";
console.log(name);

// const 선언 한 변수는 값을 변경하면 error 발생

// const a juwon // x
const userName = juwon // o

let city = "Daejeon";
console.log(typeof city);
city = 2022;
console.log(typeof city);

// boolean true, false 두 값만 존재
const im18yearsold = flase;
const im17yearsold = true;
console.log(typeof im18yearsold);
console.log(typeof im17yearsold);

let undefined = 'sleep';
console.log(undefined); // 정해지지 않은 없는 값 

// null 
let name;
console.log(name);
name = null;
console.log(name); // 고의로 저장하지 않는 값

// opject 개체
// 다른 객체의 프로퍼티 할당 가능
// 함수는 함수를 결과 값으로 반환 가능
// 함수 == (호출 + 객체) = 함수형 언어 
