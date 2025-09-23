// 반복문 for.js
// for (초기변수 선언; 조건문; 증감식;) {조건이 참일 때 반복 실행하는 식}
// for 문의 초기 변수로 자주 사용하는 변수명 : i, j, k, m, n

// 1~5 반복문

/* for(let i=1; i<=5 ; i++){
    console.log(i)
    console.log('반복')
}
console.log('==============')

// 5~10 반복문

for(let k=5; k<=10; k++){
    console.log(k)
    console.log('결과 확인')
}
console.log('==============')

// 5~0 반복문
for(let j=5; j>=0; j--){
    console.log(j)
    console.log('결과확인')
}

// 색상 반복문

for(let j=5; j>=0; j--){
    console.log(j)
    console.log('결과확인')
}

// 초기값 0, 출력형태) js 1일차, 2일차, 3일차
for(let k=0; k<=2; k++){
    console.log(`JS ${k+1}일차`)
}
for(let k=0; k<=2; k++){
    console.log(`JS ${k++}일차`)
}
for(let k=0; k<=2; k++){
    console.log(`JS ${k+=1}일차`)
} */

//연습
/* const backCol = document.querySelector('.container')
backCol.style.backgroundColor = '#ff0000'
for (backCol=) */
console.log('==============')
//2단 구구단 2*1 ~ 2*9
const danList = document.querySelector('.dan')

for(i=1; i<10; i++){
    danList.innerHTML += `<li>2*${i}=${2*i}</li>`
}

//querySelectorAll 함수로 선택한 DOM 변수 FOr문
//배열 인덱스 for 문
const array = ['photoshop', 'illustrator', 'figma', 'html', 'css', 'sketchup', 'inventer', 'fusion360', 'maya', 'blender']
//위 배열 이용 반복문으로 콘솔에 array값 모두 출력하기
for(i=0; i<array.length; i++){
    console.log(array[i])
}
//속성을 변수 및 값을 활용한 문제가 많이 나타날 것이다.

for(i=array.length-1; 0<=i; i--){
    console.log(array[i])
}

const flower = [{
    name:'장미',
    month:1
},
{
    name:'개나리',
    month:2
},
{
    name:'수선화',
    month:3
},
]

//출력
for(i=0; i<flower.length; i++){
console.log(`${flower[i].month}월 탄생화 ${flower[i].name}`)
}

console.log('==============')

//출력
for(i=flower.length; i>0; i--){
console.log(`${flower[i-1].month}월 탄생화 ${flower[i-1].name}`)
}

console.log('==============')

//1~10 반복출력(홀수)
for(i=1; i<11; i++){
    if (i%2==1){console.log(i)}
}
console.log('==============')

// 5~20 짝수 출력
for(i=5; i<=20; i++){
    if (i%2==0){console.log(i)}
}
console.log('==============')
// 0~10 역순 홀수 출력
for(i=10; i>0; i--){
    if (i%2 ==1){console.log(i)}
}

console.log('==============')

const danList2 = document.querySelectorAll('li')

for(let i=0; i<danList2.length; i++){
    danList2[i].classList.add('size')
    if(i%2 ==0){
        danList2[i].classList.add('color_even')
    } else {
        danList2[i].classList.add('color_odd')
    }
}

console.log('==============')
//while 문 (반복횟수 정해지지 않고 특정 조건이 참인 동안 반복 실행)
// 활용 에) 사용자로 부터 올바른 입력값을 받을 때 까지 반복
// 활용 예) 웹서비스 및 게임 등 계속 실행되어야 하는 프로그램
// while(조건){조건이 참일 때 반복실행}
/* let htmlQ = prompt('a태그는 가로, 세로 크기를 가질 수 없다. ox 중 하나를 입력하세요')
// 정답 맞출 때 까지 무한 질문
while(htmlQ != 'x'){
    htmlQ = prompt('a태그는 가로, 세로 크기를 가질 수 없다. ox 중 하나를 입력하세요')
}
alert ('정답') */

/* let cssQ = prompt ('ox퀴즈 : box-shadow라는 속성이 있다. 이는 X축, Y축, (    ), Alpha 값으로 이루어져 있다. 이 때 빈 칸에 들어갈 단어는 스프레드 값이다 / o또는 x로 답하시오')
while (cssQ != 'x') {
    cssQ = prompt ('ox퀴즈 : box-shadow라는 속성이 있다. 이는 X축, Y축, 스프레드, (    ) 값으로 이루어져 있다. 빈칸에 들어가는 값은 Alpha값인가?')
}
alert('Next') */

while(false){
    const qa = prompt('자바스크립트(JS)는 동적 언어이다')
    if (qa !== 'o' && qa !== 'x'){ //잘못된 답안 조건문
        alert('잘못된 입력입니다. 다시 입력해주세요')
          //다음 구문 생략 후 반복문 다시 시작.
        /* 
        break; //while//반복문 강제종료 */
    }
    // 정답, 오답
    if (qa === 'o') {
        alert('정답입니다'); break;
    } else {
        alert ('오답입니다.'); break;
    }
}
/* alert ('퀴즈 종료') */

for(let i=1; i<=10; i++){
    continue;
    console.log(i)
}

const dan99 = document.querySelector('.dan99')
const Bodyin = document.querySelector('body')
let li99 =''

for(let i =2; i<10 ; i++){ // 1번째 for 가 시작되는위치
    dan99.innerHTML = li99;
    for(let j=1;j<10; j++){// 2번쨰 for가 시작되는 위치
        li99 += `<li>${i}*${j} =${i*j}</li>`
    } //`2단 종료
}

//for in (es6)
/* const cat = {
    color : ['흰색', '검은색', '노란색'],
    age : 2,
    name : '물고기속가시',
}
console.log(cat.color)
console.log(cat.age)
console.log(cat.name)

for(let i in cat){
    console.log(i, cat[i])
}
 */
const menuA = document.querySelectorAll('.menu a')
for(let i in menuA){
    console.log(i)
}
console.log("-------------------")

for(let i of menuA){
    console.log(i)
    i.style.color = 'red'
    i.addEventListener('click', () => {
        console.log(i)
    })
}

