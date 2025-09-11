function naver_link(){
    return window.open('https://naver.com', 'blank');
}

const writeFunc = function(){
    return window.location.href('https://google.com')
}

console.log('===================================')

//DOM
const btn =document.getElementsByTagName('button')
console.log(btn,btn[3])
btn[3].style.color='red'
btn[0].style.border='1px solid red'


const div =document.getElementsByTagName('div')
console.log(div, div[0])
div[0].style.backgroundColor='bisque'
div[0].style.padding=`10px`

//클래스
const slide = document.getElementsByClassName('slide')
console.log(slide);
slide[0].style.backgroundColor= '#ff0'
slide[1].style.backgroundColor= 'rgba(0,0,0,0.1)'

const slidewrap = document.getElementsByClassName('slide_wrap')
slidewrap[0].style.border = '5px solid purple'

const container = document.getElementById('slide_container')
console.log(container)
container.style.backgroundColor = 'pink'
container.style.margin = '0 auto'
//아이디는 단 하나의 요소로 이루어지므로, 인덱스를 붙이지 않고 작성해도 됨.

slide_container.style.filter = 'invert(1)'

//ES querySeletor
const tag_es6 = document.querySelectorAll('div')
const cls_es6 = document.querySelectorAll('.slide')
const id_es6 = document.querySelectorAll('#slide_container')
console.log(tag_es6)
console.log(cls_es6)
console.log(id_es6)

//JS - HTML, CSS
//DOM.style.color; //읽기
//DOM.style.color; = '값' //수정
//객체.속성.속성
//객체.함수()

console.log('========================================')

/* const navMain = document.querySelectorAll('#main');
const mainGnb = document.querySelectorAll('ul.gnb');
const navLi= document.querySelectorAll(`ul.gnb > li`)
const navLiV2 = mainGnb.querySelectorAll('li');
const navA= navLi.querySelectorAll('ul.gnb > li >a');
const navA2= mainGnb[0].querySelectorAll('a');

console.log(navMain)
console.log(mainGnb)
console.log(navLi)
console.log(navLiV2)
console.log(navA)
console.log(navA2)
 */
/* navGnb.style.display='flex'
navli[2].style.transition = 'transform 0.3s linear 2s'
navGnb.style.fontSize= '2.0rem'
navA[0].style.animaion = 'rotate360 1s alternate infinite' */

//로그인 알고리즘
//버튼 클릭 시 사용자가 입력한 아이디, 이름, 비밀번호 확인 알고리즘

const loginBtn = document.querySelector('#loginFrm button')
const loginId = document.querySelector('#id')
const loginName = document.querySelector('#name')
const loginPw = document.querySelector('#pw')
console.log(loginBtn, loginId, loginName, loginPw)
console.log(loginId.name)
console.log(loginId.type)
//DOM 변수 사용시 ALL 키워드 유무에 따라 Index 사용 주의
//객체.속성 > 속성읽기
//객체.속성.속성 = 대입값;
//이미지객체.src = '경로'
//loginId.type= 'password'
function userinfo(){
    let data = loginId.value;
    data += loginName.value;
    data += loginPw.value;
    return console.log(data)
}