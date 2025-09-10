//basic1.js
//var 변수명; // 변수 생성
//var 변수명 = 대입값; // 변수 생성과 대입
//변수명 =대입값 // 변수 대입 (이미 생성된 변수)

//변수 연습
var a; /* undefined 값이 정의되지 않음 a=undefined */
console.log(a);
a = b; /* 최종값 20 a=b가 같다고 한들, b값이 이 열에서는 적용이 되지 않았으므로 a가 undefined다. */
var b='1';
console.log(a)/* b 변수가 선언되고 그 b의 값이 10이 선언되었다. 위에서는 a가 undefined라고 선언되어 결과값이 출력되어 끝났으므로, a는 undefined*/
a=20; //값이 정의 됨
console.log(a, b); /* a의 값이 위에서 20으로 새로 정의되어 결과값이 나타났으므로 20이다. */
var c1; /* undefined 값이 정의되지 않음 */
c1 = 30; /* 30 정의 */
c1 = 40; /* 기존 정의된 30 제거 , 40 새로 정의 */
console.log(c1)
c1 = b; /* 또 기존 정의된 40 제거, b와 같은 값을 대입함. 10 */

//데이터 타입 구분함수 typeof
//콘솔에 로그를 출력한는 객체와 함수 console.log(값 또는 선언 변수)
// Q. 콘솔 로그에 a의 데이터 타입을 출력하세요.
console.log(typeof(a))
console.log('a의 데이터타입은',typeof(a),'다.')
/* 객체,함수 사용, ()에 문자열및 typeof와 같은 새로운 함수 값 대입시
'문자열',typeof(),'문자열'을 사용하여, 문자열 사이에 typeof가 출력되도록 하였다. */
//Q. a와 b를 더한 결과는 25이고, 데이터 타입은 number다.
console.log(a+b)
console.log('a와 b가 더한 결과는',(a+b),'이고, 데이터 타입은', typeof(a+b),'다.')
//Q. a와 b를 더한 결과는 201이고 데이터 타입은 string이다.
console.log('a와 b가 더한 결과는',(a+b),'이고, 데이터 타입은', typeof(a+b),'다.')
console.log('==============================')

//사용자 정보 변수
//김가을 / 10 / 130 / 인천
let namae='김가을';
let age=10;
let height=130;
let liveplace='인천';
let move='이사'
const plus = 1; (원시형)
console.log(namae, age, height, liveplace)
//Q. 김가을은 내년에 11살 입니다.
console.log(`${namae}은 내년에 ${age+plus}살 입니다.`)
//Q. 현재는 인천에 살지만
console.log('현재는',liveplace,'에 살지만')
//Q. 다음달 서울로 이사갑니다.
liveplace='서울';
console.log(`다음달,${liveplace}로 이사갑니다.`)

/* //null and undefined
var user_id=abc; //user_id라는 변수를 선언하고 그 값은 abc이다.
user_id=null; // user_id=null을 부여함으로써 이전 값은 지워졌고, null 이므로 앞으로도 들어갈 값도 없다.
var user_age; //user_age라는 변수만 만들어두고 값은 주지 않았다 */

//장바구니 변수 
let cart=''; //장바구니 초기상태(비어있음)
cart = '사과' //cart에 '사과'라는 값을 부여했다.
cart = '바나나'+ cart; // '바나나'에 기존 cart변수 값을 더해 새로운 카트 값을 생성하겠다.
cart = ''; // cart를 비우겠다.
console.log(cart);

console.log('================')
//es6 새로운 변수 let, const
var webStudy='html';
var webStudy= webStudy + 'css'; //중복 구분 안함
console.log(webStudy);

let webStudy2 = 'sass'
webStudy2 = webStudy2 + 'javascript' //중복구분함
console.log(webStudy2)

const webStudy3='figma'; //undefined //undefined에서 figma로 바뀜.
console.log(webStudy3)

/* print(); */

//log() 기록 실행 함수
//typeof() 데이터 타입 실행함수
//print() 프린트 출력함수
//prompt() 질문 답변 실행 함수.
//confirm() ; 확인 취소창 실행

/* prompt('동해물과 백두산이'); */
/* const que1 = prompt('1+1은?');
console.log(que1);
console.log(typeof(que1)); */
//confirm(que1)

/* const kurly_order_num = Number(prompt('주문 수량을 입력해주세요'));
const kurly_price = 19900;
console.log(typeof(kurly_order_num));
const kurly_total = kurly_order_num*kurly_price;
console.log(`주문수량은 ${kurly_order_num}, 개당 가격은 ${kurly_price}로, 총 ${kurly_total} 입니다. 가격을 확인해주세요.`); */

//구구단
const dan99 = prompt ('긴긴팔다리 아무 숫자나 입력해보라고~')
console.log(`${dan99} X 1 =${dan99*1}`);
console.log(`${dan99} X 2 =${dan99*2}`);
console.log(`${dan99} X 3 =${dan99*3}`);
console.log(`${dan99} X 4 =${dan99*4}`);
console.log(`${dan99} X 5 =${dan99*5}`);
console.log(`${dan99} X 6 =${dan99*6}`);
console.log(`${dan99} X 7 =${dan99*7}`);
console.log(`${dan99} X 8 =${dan99*8}`);
console.log(`${dan99} X 9 =${dan99*9}`);