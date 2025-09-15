//DOM2.js
// 1. 변수 section*2, a*2, btn*2 (동적대상 체크 후 변수 생성)
const sectionTag = document.querySelectorAll('section');
const linkCls = document.querySelectorAll ('section .link');
const btnCls = document.querySelectorAll ('section .btn');
console.log(sectionTag, linkCls, btnCls);

// 2. 이벤트와 함수, 속성
// 초기값 (즉시실행)=
sectionTag[0].style.backgroundColor = '#ff0'
sectionTag[1].style.backgroundColor = '#f0f'
//이벤트, 콜백 함수 추가 생성
//a2 클릭 시 secton[1] 배경색 변경
//a태그에 클릭, 터치 이벤트 적용 시 href 속성 때문에 스크롤이 위로 올라가는 문제 발생
// -> a의 기본속성기능 해제 -> preventDefault()
/* linkCls[1].addEventListener('click', bgFunc) */
/* function bgFunc(e){
    console.log(e);
    e.preventDefault();
    return sectionTag[1].style.backgroundColor = '#59AC77'
}
console.log(linkCls[1]) */
/* linkCls[1].addEventListener('click', function(e){
    console.log(e);
    e.preventDefault()
    return sectionTag[1].style.backgroundColor = '#59AC77'
}
) */
/* linkCls[0].addEventListener('click', (d) => {
    d.preventDefault();
    console.log(d)
    sectionTag[0].style.backgroundColor = '#F5D2D2'
})


linkCls[1].addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    sectionTag[1].style.backgroundColor = '#59AC77'
}) */
/* btnCls[0].addEventListener('click', () => {
    window.location.href='../sass_study/project_2/index.html'
}) */
/* btnCls[1].addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    window.location.href='../../index.html'
    //상위폴더 명을 적을 필요는 없음. 디테일 조금씩 챙겨가기.
}) */
btnCls[0].addEventListener('click', sassProjectFunc('project')) //project1/index
btnCls[1].addEventListener('click', sassProjectFunc('project_2')) //project1/index
function sassProjectFunc(src) {
    return function () {
        window.location.href = `../sass_study/${src}/index.html`
    }
}

//쇼핑몰 수량변수

const inputNum = document.querySelector('#count')
const plusCls = document.querySelector('#plus')
const minusCls = document.querySelector('#minus')
const priceCls = document.querySelector('em')
let count = 1 //초기값 변수이고, 버튼 클릭마다 수량이 변경되어야 하므로 설정해야한다.
console.log(inputNum, plusCls, minusCls)

//수량이 1로 시작해서 +클릭하면 증가, -클릭하면 감소
//value 초기값이 count 이므로
inputNum.value = count;
let price = 12900
let totalPrice = price * count
priceCls.textContent = totalPrice.toLocaleString('ko-kr')

plusCls.addEventListener('click', AddCount)
function AddCount () {
    inputNum.value = ++count
    totalPrice = price * count
    return priceCls.textContent = totalPrice.toLocaleString('ko-kr')
}
//최초로 1로 설정된 count에 1을 더해 2로 만들며, 이 값이 value와 같으므로 inputNum.value는 2가 되어 새로 부여가 된다.
//여기에 버튼을 추가로 누르면 1씩 더하게 되어 2에서 3으로 추가되어 새로부여, 3에서 4로 추가되어 새로 부여 된다.
minusCls.addEventListener('click', minusCount)
function minusCount () {
    inputNum.value = --count
    totalPrice = price * count
    return priceCls.textContent = totalPrice.toLocaleString('ko-kr')
}
//부여된 값에 -1을 적용하여 inputNum.value에 새로이 부여한다.
//현재 적용된 값이 4일 경우, -1을 하여 3으로 계산하여 inputNum.value에 새로 부여한다. 

//객체.속성
//img.src(O)
//a.src(X)(error)

// div.textContent, innerHTML 는 읽기 전용 태그일 때 수정이 필요할 때 쓰이나
//input.value -> 읽기와 쓰기 동시에 되는 태그이기 때문에 쓰일 필요가 없다.

//<a href="url"></a> : O
//<button url=""></button> : X

// button을 이용하여 JS 진행 시, 특정 페이지 이동이 필요한 경우 location.href를 사용한다.
// 이 때, js에서 상대경로 작성은, html 위치 기준으로 작성한다.
// href는 javascript가 연결된 html 문서를 위치 기본값을 잡기 때문에 경로 설정 시 주의 할 것.