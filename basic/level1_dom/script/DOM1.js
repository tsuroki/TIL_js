const inputTag=document.querySelectorAll('input');
const btnTag=document.querySelectorAll('button');
console.log(inputTag, btnTag)
console.log(inputTag[0], btnTag[0])
console.log(inputTag[1], btnTag[1])
console.log(inputTag.length, btnTag.length)

const searchInput=document.querySelector('#s')
/* const searchInput2=document.querySelector('section:first-child input')
const searchInput3=document.querySelector('input[type="search"]')
const searchInput4=document.querySelector('input[name*=s]') */
const searchBtn = document.querySelector('#search_btn')
const shopNumInput = document.querySelector('input#num')
const shopNum = document.querySelector('#cart_btn')
console.log(searchInput, searchBtn, shopNumInput, shopNum) //querySelectorAll이 아니므로 [index] 사용이 불가하다.

/* 태그속성, 함수 테스트 */
console.log(searchInput.type, searchInput.placeholder) //속성읽기
console.log() //속성읽기
//searchInput.placeholder() //함수일 때
searchInput.placeholder = " " //속성일 떄
let checkValue = '' // 빈값 초기화 및 변수선언
checkValue = searchInput.value; // checkValue에게 빈 값 대신 부여
searchInput.value = '인기검색어 :html' //checkValue=searchInput 객체에 value 값 부여.
console.log(checkValue)  //

console.log(shopNumInput.type)
console.log(shopNumInput.name)
console.log(shopNumInput.value+1) // 문자 + 숫자 = 문자
console.log(shopNumInput.type)
checkvalue = Number(shopNumInput) +1
console.log('주문수량 : #checkValue')


/* const inputTag=document.querySelectorAll('input');
const btnTag=document.querySelectorAll('button')
const searchInput=document.querySelector('#s')
const searchBtn = document.querySelector('#search_btn')
const shopNumInput = document.querySelector('input#num')
const shopNum = document.querySelector('#cart_btn') */

inputTag[0].style.backgroundColor = '#000'
inputTag[0].style.color = '#fff'
inputTag[0].style.padding = '10px'

searchBtn.style.backgroundColor = '#f0f'
searchBtn.style.padding = '10px 40px'
searchBtn.style.borderRadius = '20px'

inputTag[1].style.backgroundColor = 'rgba(0,0,0,0.1)'
inputTag[1].style.padding = '10px'
inputTag[1].style.width = '40px'

shopNum.style.backgroundColor = 'purple'
shopNum.style.color = '#fff'
shopNum.style.padding = '10px 20px'
shopNum.style.borderRadius = '20px'

//이벤트 활용 콜백함수 호출
//이벤트 문법 : 객체.addEventListener('이벤트 종류', 콜백함수)
const orderBtn = document.querySelectorAll('#order')
console.log(orderBtn)

//주문 버튼 클릭 시 '상품을 선택하세요.' 경고창 출력
//이벤트 뒤 함수 작성방식 : 콜백함수호출, 익명함수
/* orderBtn.addEventListener('click',function(){
    alert('상품을 선택하세요.')
}) */


orderBtn[1].addEventListener('click', orderFunc_v2)


//주문하기 클릭시, "장바구니에 담으세요 (alert)"
//장바구니 클릭시, "상품을 담으세요"
// 콜백함수 1개 활용. 각각 다른 DOM이벤 클릭시 다른 메세지 출력,
//이벤트 뒤 콜백함수는 함수 그 자체를 호춣하는 개념.
//결과값만 받고 수정값은 따로 전달하지 않음.
// 매개변수의 수정이 필요한 콜백함수는 이벤트 뒤 *익명함수 또는 화살표함수 추가 제작*으로 수정가능한 함수로 재작성.
/* function orderFunc(data){
    return alert(data+ '추가해주세요.')
} */
function orderFunc_v2(data){
    return function(/* 내부함수는 외부함수의 매개변수를 기억하므로, 클로저 함수의 매개변수는 기록하지 않는다. */){alert(data+ '담으세요')} /* 클로저(closure) */
}
const Cartadd = document.querySelector('#cart_in')
//console.log(Cartadd)

const orderBtn_top = document.querySelectorAll('button')
console.log(orderBtn_top)

orderBtn_top[0].addEventListener('click', orderFunc_v2('상품')
)//익명함수. 여기 안에서만 사용가능한 함수임. (지역스코프))

orderBtn_top[1].addEventListener('click',
    orderFunc_v2('장바구니에'))

function addFunc(data){
    return alert(data + '상품을 선택하세요.')
} 

console.log("========================")


//아이디, 비밀번호 중복확인 클릭 시
//아이디가 중복되었습니다.
//비밀번호가 중복되었습니다.
//매개변수 -> 아이디 또는 비밀번호
//1. 제어 DOM 객체 변수 등록
const id_overlapBtn = document.querySelector('.login')
//2. "클릭 시" 이벤트 콜백 함수 제작 ex)orderBtn_top[0].addEventListener('click', orderFunc_v2('상품'))
const pw_overlapBtn = document.querySelector('.password')
// 중간 점검. 지정은 잘 됐는가.
console.log(id_overlapBtn, pw_overlapBtn)
//3. 실행 메세지가 통일된 특징에 맞춰서 콜백함수 및 콜백함수에 사용할 함수 1개씩 제작.
id_overlapBtn.addEventListener('click',overlap_error_v2('아이디'))
pw_overlapBtn.addEventListener('click',overlap_error_v2('비밀번호'))

//콜백함수 제작 시, 화살표 함수 사용할 때, 매개변수를 나타내는 ()안에 값 넣지 말것. 화살표에 오류생김.
//Uncaught SyntaxError: Invalid destructuring assignment target
//매개변수를 함수로 보낼 때 또는 함수 선언시 잘못된 부분이 있을 때 발생.

/* function overlap_error(msg){
    return alert(msg+'가 중복되었습니다. 다시 한 번 확인해 주세요.')
} */
function overlap_error_v2(msg){
    return function(){ /* 클로저(closure)함수 */
        alert(msg+'가 중복되었습니다. 다시 한 번 확인해 주세요.')
    }
}
//() is not a function 발생시 -> 함수 선언 시 개체 선언이 정확한지, 오타는 없는지 확인
//사용하는 매개변수 및 다른 속성에 오탈자가 있는지 확인.

//3-1. 콜백함수 내 함수호출 시 다른 내용 있다면 매개변수 제작.

//4. 3번 콜백함수를 2번 이벤트에서 호출.

/* ============================================== */

const LetteringBorder = document.querySelector('textarea')
console.log(LetteringBorder)
LetteringBorder.style.border='1px rgba(0,0,0,0.1) solid'
LetteringBorder.style.width='200px' 
LetteringBorder.style.height='100px' 
LetteringBorder.style.outline='none' 

//이벤트 콜백
//q1. textarea 값을 아무거나 입력했을 때 콘솔창에 '50자 이상 입력하세요' 출력. alert에도?
//q2. textarea를 활성화 했을 때, 테두리 빨간색으로 변경. fosue
//q3. textarea를 비활성화 했을 때, 테두리 회색. blur
LetteringBorder.addEventListener('keydown',add_text)
LetteringBorder.addEventListener('focus',Geton_text)//** */
LetteringBorder.addEventListener('blur',Getoff_text)//** */
LetteringBorder.addEventListener('click',Focuson_text)

function add_text(){
    return console.log('50자 이상 입력하세요.')
}
function Geton_text(){
    return LetteringBorder.style.border = 'red 1px solid'
}
function Getoff_text(){
    return LetteringBorder.style.border = 'rgba(0,0,0,0.1) 1px solid'
}
function Focuson_text(){
    return LetteringBorder.style.border = 'red 4px solid'
}

//배경 버튼 클릭 시 부모 article 배경색 변경하기.
const articleTag = document.querySelector('article')
const bgBtn = document.querySelectorAll('.bg')
const bgP = articleTag.querySelector('p')
console.log(articleTag)
console.log(bgBtn, bgP)

bgP.textContent = '현재 배경색상 = '

articleTag.style.width= '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = 'eee'

bgBtn[0].style.padding = '10px'
bgBtn[0].style.backgroundColor = '#F5D2D2'
bgBtn[1].style.padding = '10px'
bgBtn[1].style.backgroundColor = '#A8FBD3'
bgBtn[2].style.padding = '10px'
bgBtn[2].style.backgroundColor = '#F5EFE6'

//배경버튼에 마우스 올리면 article 배경색 변경

//1. bgBtn에 각각 마우스를 올린다. 0, 1 ,2
//2. bgBtn에 적용된 backgroundColor 값을
//3, articleTag의 backgroundColor에게 부여한다.

bgBtn[0].addEventListener('mouseover', bgChange('#F5D2D2'))
bgBtn[1].addEventListener('mouseover', bgChange('#A8FBD3'))
bgBtn[2].addEventListener('mouseover', bgChange('#F5EFE6'))

function bgChange(data){
    return function(){articleTag.style.backgroundColor = data;
        bgP.textContent = `현재 배경 색상 : ${data}`
    }
}

console.log(bgChange())