//boolean.js
//거짓으로 평가되는값
//null, NaN, undefined, 빈 값, 0, false
//참 판명값 => 위를 제외한 모든 값, [] {} 빈 배열 포함
let ex =""
console.log(Boolean(ex))
ex= []
console.log(Boolean(ex))

//비교연산자
// == 밸류 일치 연산, === 데이터타입 일치 연산
let b = 10;
let c = "10";
/* let result = b = c
console.log(result)
result = b == c
console.log(result)
result = b === c
console.log(result)
 */
//헷갈리면 안됨 !! =이 1개일 때는 대입연산자로 활용되며, 2개부터는 비교 연산자로 활용 되므로 사용처를 명확히 할 것

result = b != c
console.log(result) //b는 10으로 데이터 타입이 Number이고 c는 "10"으로 값은 10이나 값 자체는 같다. 그러나 여기에 제시된 연산자는 !=로, 같지 않다고 주장하기 때문에 false가 되는 것이다.
result = b !== c
console.log(result) //b는 10으로 데이터 타입이 Number이고 c는 "10"으로 값은 10이나 String이기 때문에 다르다. !==는 같지 않다가 되므로 성립한다.

b +=5;
//+=5를 할 경우, b는 15가 되므로 값도, 데이터 값도 c와 달라지게 되므로
result = b != c
console.log(result) // 데이터 값이 다르기 때문에 성립
result = b !== c
console.log(result) // 데이터 및 값 모두 다르므로 성립.

/* ====================================================== */
console.log("=================================")

c += 20
//c에 2를 대입하여, c의 값을 2로 만들었다. // 이 시점에서 b=15, c=2.

result = b < c
console.log(result)

result = b > c
console.log(result)

result = b <= c
console.log(result)

result = b >= c
console.log(result)

/* ====================================================== */
console.log("=================================")

//논리연산자
console.log("A"&&null)
console.log("A"&&"B")
console.log( 0 && "B")
console.log( 0 || "B")
console.log("A" || "B")
console.log( "" || {}) //띄어쓰기든 뭐든 없으므로 ""은 거짓.
console.log( "" && {}) 
console.log( " " || {}) // 띄어쓰기 라는 값이 들어가 있으므로 " "이 참이다.
console.log( " " && {})

/* ====================================================== */
console.log("=================================")

let d;
result = !d;
console.log(result);

/* ====================================================== */
console.log("=================================")

let e=[];
result = !e; // false
console.log(result); //결과값이 false이므로 result = !e는 false로 판명이 났다.
e += ['사과'] //이 때 배열에 값을 추가한다 하더라도
console.log(result); //result = !e 식의 결과값이 먼저 false로 처리되었으므로 false가 유지된다.
/* ====================================================== */
console.log("=================================")
// if(조건식) {조건문이 참을 때 실행문}\
let x = []
let y = 0
if(x) {console.log ('x는 참이다1')}
if(y) {console.log ('x는 참이다')}
if(x==true) {console.log ('x는 참이다2')}
if(x && y) //x는 참이나 y가 거짓이므로, false
console.log (x && y)
if(x || y) //x는 참이나 y가 거짓이므로, false
console.log (x && y)

/* ====================================================== */
console.log("=================================")                                                   

x= 7; 
y =2;
if(x>y && x==y) '{//참일 때 실행되는 문구}' //비 실행
 //실행 자체가 안됨. y가 string으로 크기 값이 부여되지 않았기 때문에 실행 여부 묻기가
if(!x) '{//참일 때 실행되는 문구}' // 비 실행.
if(y || !x) '{//참일 때 실행되는 문구}' //실행
if(!y || x) '{//참일 때 실행되는 문구}' //실행

/* ====================================================== */
console.log("=================================")

if(x>y && x==y) '{//참일 때 실행되는 문구}' //비 실행
if(x>y || x==y) '{//참일 때 실행되는 문구}' //실행
if(!x) '{//참일 때 실행되는 문구}' // 비 실행.
if(y || !x) '{//참일 때 실행되는 문구}' //실행
if(!y || x) '{//참일 때 실행되는 문구}' //실행
if(x>y && x==y) '{//참일 때 실행되는 문구}'

/* ====================================================== */
console.log("=================================")

//작동 방식
//나이 입력 후 버튼 클릭시 10살 이하면 '탑승 불가' 메세지 출력
const ageInput = document.querySelector('input')
const ageBtn = document.querySelector('#age_btn')
const ageResult = document.querySelector('.result')
console.log(ageInput, ageBtn, ageResult)
// 조건
/* 
1. 10살 이상이면 탑승가능,
*/
// 동작
/* 
2. 나이를 입력하고
3. 버튼을 입력할 때
4. 입력한 숫자를 불러오고
5. 함수에 대입하여
10.
*/
ageBtn.addEventListener('click', () => {
    if(ageInput.value > 10){
    ageResult.textContent = '나이가 10살을 넘으셨군요! 탑승이 가능해요! 언제든지 환영합니다!';
    ResetInput()
    }
    if(ageInput.value <= 10){
    ageResult.textContent = '나이가 10살 이하군요... 아쉽지만 탑승이 불가해요... 다음에 다시봐요!';
    ResetInput()
    }
    if(ageInput.value == ""){
    ageResult.textContent = '저는 나이를 적어달라고 했지, 아무것도 하지말란 말은 안했는데요...'
    }
})

function ResetInput(){
    return ageInput.value = '';
}

console.log(ageResult)

/* ageBtn.addEventListener('click', () => Resultage()) */
/* function Resultage(num){
    if(num > 10){
    return ageResult.textContent = '나이가 10살을 넘으셨군요! 언제든지 환영합니다!'
}}
function Resultage(num){
    if(num <= 10){
    return ageResult.textContent = '나이가 10살 이하군요... 아쉽지만 다음에 다시봐요!'
}} */

/* ====================================================== */
console.log("=================================")

//동작순서
/* 
1. 프린트 아이콘 클릭
2. '인쇄하시겠습니까? confirm출력
3. 확인 누를 시
4. print 실행
*/

const printBtn = document.querySelector('#print_btn')
console.log(printBtn)

printBtn.addEventListener('click', printFunc)

function printFunc(){
    let confirmResult = confirm('인쇄하시겠습니까?')
    console.log(confirmResult)
    if (confirmResult){print()}
    return
}

//해당 파트 기억해두기. confirm이나 알림창 클릭여부에 따라 이벤트 조절이 가능하니 알고있으면 좋다.
//특히 confirm의 경우 확인, 취소가 나타나기 때문에, 해당 클릭값에 따라 동작여부가 결정되는데
//confirm 자체를 변수로 등록해, 확인을 누르면 true, 취소를 누르면 false가 나오는 것을 이용해
//if 구문을 작성한다.

/* ====================================================== */
console.log("=================================")

//참과 거짓에 따른 결과출력 조건문
// if(조건식){참일 때 실행. else{거짓시 실행}
// 조건 -> 관리자 로그인
// 1. 관리자(id=admin)일 경우 -> 관리자님 어서오세요
// 2. else -> 관리자페이지 접근 불가.

/* const userId = prompt('아이디를 입력해주세요.')

if(userId != 'tsuroki'){
    alert('fuck you')
}else {alert('come on you son of-')} */

//로그인 조건문 1)
//1. 아이디 미입력
//2. 비밀번호 입력
//3. 로그인 클릭
//4. alert 아이디를 입력해주세요

//로그인 조건문 2)
//1. 아이디 입력
//2. 비밀번호 미입력
//3. 로그인 클릭
//4. alert 비밀번호를 입력해주세요

//로그인 조건문 3)
//1. 아이디 입력
//2. 비밀번호 입력
//3. 로그인 클릭
//4. alert 틀린정보가 있을 시 메세지 출력

const Inputde = document.querySelectorAll('.input_de')

Inputde[1].style.border = '1px solid #000'
Inputde[0].style.border = '1px solid #000'

const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const loginBtn = document.querySelector('#login_btn')
const loginErrorMsg =document.querySelector ('.error')
console.log (userId, userPw, loginBtn, loginErrorMsg)

/* loginBtn.addEventListener('click', () => {
    //1.아이디 미입력 기준 에러 메세지 출력
    if (userId == ''){
        loginErrorMsg.textContent = '아이디를 입력해주세요'
    }
    //2.비밀번호 미입력 기준 에러 메세지 출력
    if (userPw ==''){
        loginErrorMsg.textContent = '비밀번호를 입력해주세요.'
    }
    //1.아이디 미입력 기준 에러 메세지 출력
    if (userId == '', userPw ==""){
        loginErrorMsg.textContent = '아이디를 입력해주세요'
    }
    if (userId == 'tsuroki', userPw == "!rose4316"){
        confirm('환영합니다')} else {loginErrorMsg.textContent = "아이디와 비밀번호를 확인해주세요."}

}) */
//정보저장 db
//관리자 이름 : 봄, 나이: 30
// 일반회원 이름 : 여름, 나이: 20
const userDB= [{ //userDB[배열].id
    name :'봄',
    age:30,
    pst:'관리자',
    id:'admin',
    pw:'1234',
    },
    {
    name :'여름',
    age:20,
    pst:'일반회원',
    id:'summerid',
    pw:'rainy',
    },
]

//로그인 클릭 이벤트

loginBtn.addEventListener('click', () => {
    if(userId.value == ''){//아이디 미입력
        loginErrorMsg.textContent = "아이디 비어있음, 확인요망."
    } else if (userPw.value == '') {///비밀번호 미입력 //if의 조건이 거짓이고, else if 조건이 참일 때 발생 -> 아이디는 쓰여져 있으나, 비밀번호는 비어있을 때.
        loginErrorMsg.innerHTML = "비밀번호 비어있음.<br> 확인요망"
    } else if(userId.value==userDB[0].id) {
        if(userPw.value==userDB[0].pw){/* 
        location.href ='../../index.html' */
        console.log('로그인 성공')
        /* isLogin = true;
        console.log(isLogin) */
        //로컬환경에서 확인가능한 브라우저 데이터 저장법
        localStorage.setItem('isLogin2','true') //-> 저장하기
        //localStorage.setItem('속성','값') -> 불러오기
        //localStorage.getItem('가져오는 속성') -> 불러오기
}else { //모든 조건이 거짓일 때 (입력 id, pw 저장된 정보와 다를 때)
    loginErrorMsg.textContent = "아이디 또는 비밀번호가 잘못되었습니다. 다시한번 확인해주세요."
    }
    } 
})

//boolean_common.js 변수확인
/* console.log(isLogin) */