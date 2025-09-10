/* let coffee = 1500{원시형};
let lunchpackage = 6000;
let transport = 3000;
let total = coffee+lunchpackage+transport;
console.log(`오늘 총 지출액은 ${total.toLocaleString()}원 입니다.`)
console.log(`오늘 총 지출액은 ${coffee+lunchpackage+transport.toLocaleString}`) */



/* let review = window.prompt('리뷰를 작성하세요');
console.log(review);

//객체.함수();
//객체.속성;
//글자수 체크 속성
let reivew_length = review.length
console.log(review, typeof(review));
console.log(`현재 작성 글자 수는 ${reivew_length}자 입니다.`) */

//오브젝트 형 데이터 - 객체

//변수생성키워드(let, const,var) 변수명 = {속성(키):값, 속성(키):값, 속성(키):값...}
let rectangle = {
    width: 300,
    height: 200,
    x: 0,
    y: -100,
} //오브젝트형
console.log(`${rectangle.height}px`);
console.log(rectangle.height+'px');
console.log(rectangle.height,'px');

// 300px, 200px
console.log(`${rectangle.width}px, ${rectangle.height}px`)

let user_info = {name:`가을`, age:3, gender:`female`, area:`서울`} //=오브젝트 형 데이터, 그 안에 저장된 '속성:값'이 콜스택이며, 속성에 부여된 값은 메모리 힙이다.
//변수선언 변수명 = {속성지정:속성값 {메모리 힙 저장}, 속성지정:속성값, 속성지정:속성값, 속성지정:속성값...} 오브젝트 형 데이터
console.log(user_info.name);
//객체.함수(변수.오브젝트형 데이터 안에 선언된 속성(콜스택)을 불러와 속성에 지정된 값(메모리 힙)이 console이라는 객체에 .log라는 함수에 의해 출력이 됨.)

let product1 = {name_p:`마스크`, price:1000, quantity:999, color:`white`}
//상품명 : 마스크(white)
//상품값 : 1000원
//수량 : 999개
console.log(`상품명 : ${product1.name_p}(${product1.color})`)
console.log(`상품가격 : ${product1.price.toLocaleString('ko-kr')}원`)
console.log(`재고현황 : ${product1.quantity}개`)
//오브젝트 형에서 속성을 불러오는 경우, '출처객체변수.속성명' 을 명확히 하여야 한다.

//오브젝트 데이터 타입 2. Array
//변수생성키워드 변수명 = [index0, index1, index2]
//변수생성키워드 변수명 = new array (값, 값, 값)
//변수생성키워드 변수명 = new array (전체길이)

/* const date = ['월', '화','수','목', '금','토','일'];
console.log(date)
//특정 값(index) 호출
console.log(`오늘은 ${date[2]}요일`) //Array 안 값 호출시 '변수명[값 위치]' 작성 */

const alphabet = new Array('a','b','c','d','e','f','g')
console.log(alphabet, alphabet[2], alphabet.length)

const year = new Array(4) //4개의 길이를 가진 배열 생성
year[0]=2025;
year[1]=2024;
year[2]=2023;
year[3]=2022;
//비어있는 index에 원시값 또는 오브젝트값을 부여할 경우 일반변수생성시 처럼 '변수명[index자리]'='부여할 index값' 작성한다.
console.log(year)

//1. 좋아하는 색상 6개를 배열로 저장 / 2.그 중 가장 좋아하는 색상 2개를 골라 / 3.콘솔에 출력
const fav_color = new Array(6)
fav_color[0]='magenta'
fav_color[1]='purple'
fav_color[2]='vivid violet'
fav_color[3]='pale purple'
fav_color[4]='dark purple'
fav_color[5]='deep magenta'
console.log(`${fav_color[0]}, ${fav_color[3]}`)

//2. 좋아하는 과일 5개를 배열로 저장 / 2. 배열을 역순으로 출력
const fruit = new Array(5)
fruit[0]='수박'
fruit[1]='포도'
fruit[2]='오렌지'
fruit[3]='키위'
fruit[4]='복숭아'
console.log(
    `${fruit[4]},${fruit[3]},${fruit[2]},${fruit[1]},${fruit[0]}`
)
console.log(fruit[4])
console.log(fruit[3])
console.log(fruit[2])
console.log(fruit[1])
console.log(fruit[0])

//요일-날씨 정보 출력
// 월 - 맑음, 화 - 비 , 수 - 흐림, 목 - 맑음 , 금 - 맑음, 토 -비, 일 - 흐림
const date = ['월','화','수','목','금','토','일'];
const weather = ['맑음','흐림','비',]
console.log(`
    ${date[0]}-${weather[0]},
    ${date[1]}-${weather[2]},
    ${date[2]}-${weather[1]},
    ${date[3]}-${weather[0]},
    ${date[4]}-${weather[0]},
    ${date[5]}-${weather[2]},
    ${date[6]}-${weather[1]}
    `)

//영화 -mage box
const mega = new Array(8); //빈 좌석 준비
mega[0] = 'A1';
mega[1] = 'A2';
console.log(
    `현재 예매 좌석 : ${mega[0]},${mega[1]}`
)
mega[0] = '';
mega[1] = null;
console.log(
    `현재 예매 좌석 : ${mega[0]},${mega[1]}`
)

//영화 - cgv 좌석 예매와 취소
const cgv = [] // 빈 배열 준비
console.log(cgv.length)
//좌석 A1 선택
cgv.push('A1')
console.log(cgv)
cgv.push('A2','A7')
console.log(cgv)
cgv.shift(1)
console.log(cgv)
cgv.unshift('G2')
console.log(cgv)
cgv.unshift('G4','G6')
console.log(cgv)
cgv.pop()
console.log(cgv)
cgv.unshift('H5')
console.log(cgv)
console.log(cgv.length)
cgv.unshift('H6')
cgv.unshift('H7')
cgv.unshift('H8')
console.log(cgv)
console.log(cgv.length >= 8)
//선택 좌석이 8개일 때 좌석 추가 금지
const t_price = 11000;
//출력 결과 예시
//선택 좌석 수 :
//총 결제 금액 :
let cgv_length = cgv.length
let cgv_total_price = (cgv.length*t_price).toLocaleString('ko-kr')
console.log(`선택 좌석 수 : ${cgv_length}석`)
console.log(`총 결제 금액 : ${cgv_total_price}원`)
//줄이 늘어나더라고, 변수를 새로 지정해 식을 작성하고, 변수만을 출력한다면
//유지 보수가 쉬워진다.

//연산자 연습
//1. 산술연산자.
/* let num1 = 5
let num2 = 10
let result1 = num1+num2
console.log(result1)
let result2 = num1-num2
console.log(result2)
let result3 = num1*num2
console.log(result3)
let result4 = num1/num2
console.log(result4)
let result5 = num1%num2
console.log(result5)
let result6 = num1**num2
console.log(result6)
 */
//Q. 이항 연산자 활용 두 수를 사용자에게 입력받아, 입력받은 값 활용, 더하는 계산기 만들기.
const first_num = /* Number(prompt('1항')); */ 2;
const second_num = /* Number(prompt('2항')); */ 2;
console.log(typeof(first_num));
console.log(typeof(second_num));
const a_result=(first_num+second_num);
console.log(a_result);
console.log(first_num,second_num)
//일회성 출력으로 문제해결 안됨 -> 원인 -> prompt가 문자열로 바꾸기 때문.
// prompt가 문자열로 바꾸기 때문. Number로 감싸기.

console.log('====================')

//증감 연산자.
/* let x = 5
let y = 0
console.log(x,y,typeof(x),typeof(y))
y= x++
console.log(x,y,typeof(x),typeof(y)) //6 5
x= ++y
console.log(x,y,typeof(x),typeof(y)) //6 6
x= y++
console.log(x,y,typeof(x),typeof(y)) //6 7
x++;
--y;
console.log(x,y); //7 6 */
/* let a = 10
let b = 20
let c = 30
let d = 40
//a=10 b=20 c=30 d=40
a++ //a연산 진행 -> 10 / 1증가 / 11
b-- //b연산 진행 -> 20 / 1 감소 /19
c++ //c연산 진행 -> 30 / 1 증가 / 31
d-- //d연산 진행 -> 40 / 1 감소/ 39
console.log(a,b,c,d)
//a=11 b=19 c=31 d=39
a=++b // 아무것도 없는 상태에서 1증가 / b연산 진행 / b= 20 a= 20
console.log(a,b,c,d)
b=a++ // a연산 진행 후 1증가 /우측 20+1/ b 20
//a=21 b=20 c=31 d=39
console.log(a,b,c,d)
//---------------------------
c= a+b //a=21과 b=20합 ->41
console.log(a,b,c,d)
d= ++c // c연산 진행 41, 1 증가 -> 42 / d는 c와 같아지므로 41
//a=21 b=20 c=42 d=42
console.log(a,b,c,d)
//---------------------------
a = ++c +10 // a=++1증가후 c연산 진행 c= 43 / c+10 / c=43 // a=53
// a=53, b=20, c=43, d=42
console.log(a,b,c,d)
b = --d +1 // 현재 d => 41 -> -1 진행 -> d= 40 -> 40 +1 -> b= 41
// a=53, b=42, c=43, d=41
console.log(a,b,c,d) */

//연산자 3 . 복합대입연산자
let number = 10;
/* number = number+5 */
number += 5;
console.log(number);//15

number -= 5
console.log(number);//10
number *=5
console.log(number);//50
number /=5
console.log(number);//10
number %=5
console.log(number);//0

console.log('===========================================')
//1. 내장 함수
//prompt('함수는?')
//alert('함수는')
//print()

//2. 사용자 지정 함수
//funciton 함수명(전달인자=선택){반복구문=필수}
//Q1. html, css, js 반복 출력

let lang1 = ''
let lang2 = ''
let lang3 = ''
//빈문자열 초기화

function study_lang(){
    lang1='html'
    lang2='css'
    lang3='javascript'
    console.log(`배운언어 : ${lang1+lang2+lang3}`)
    //자동실행이 아님. 호출언어.
}
study_lang(); //호출
/* 함수는 생성(5분 대기조) 및 호출(상황 발생)을 별개로 취급. */

console.log(lang1,lang2,lang3)
lang2=lang2 +'3'
console.log(lang2);

function study_lang2(){
    lang2
    console.log(`배운언어 : ${lang2}`)
}
console.log(lang2)
study_lang2();

console.log('//------------------------------------------------------------------------------------//')

let xx = 1
let yy = 0

function func1() {
    yy = 5;
    console.log(xx+yy);
}
//함수 선언 및 함수 실행으로 인해 let yy가 5로 지정이 완료가 되었다.
//let yy는 함수 func1을 거쳐 5로 지정이 되었으므로 let yy = 5, 값이 재지정된 전역 스코프가 되었다.

func1(); //

function func2() {
    let zz = 10;
    console.log(xx+yy+zz);
}

func1()
func2()