//timer1.js
//setInterval(콜백함수, 시간)
/* let num1 = 1;
const timer1= setInterval(function(){
    console.log('timer test' + num1)
    num1++
    if(num1>5) num1 = 1
},1000) */
//setInterval
//interval 시간적인 간격, 무언가를 이행하기 위한 시간간격을 뜻한다.
/* 즉 setInterval은 어떤 동작을 수행하기 위해, 시간 간격을 설정하는 명령어로 setInterval(function, time/ms)를 사용한다.
여기서 알 수 있듯이, 함수를 매개변수로 삼으며, 이 함수를 일정시간동안 실행해주는 기능을 가지고 있는데, 이 때 설정하는 시간은 ms(밀리세컨드)를 기본단위로 삼는다.
그렇기 때문에 1000을 작성하면 1000ms로, 1s가 된다. */

// 0~6까지 반복되는 타이머 제작
/* let setTime = 1
const Intervaltimer = setInterval(function(){
    console.log('타이머상태' + setTime++)
    if(setTime > 6){
        setTime = 0
    }
},400)

//3~0 반복되는 타이머
let timerReverse = 3
const Reverse = setInterval(function(){
    console.log('출발까지' + timerReverse--)
    if(timerReverse < 0){
        timerReverse = 3
    }
}, 400) */

//이미지 슬라이드 타이머 사용

/* const gentleSlide = document.querySelectorAll('.gentle_slide_container .slide')
let num = 1
console.log(gentleSlide)
//12345 012345 012345
const slideTimer = setInterval(function(){
    console.log('넘기기까지' + num++)
    if(num > gentleSlide.length)
        num = 0
        for(let i of gentleSlide)
            i.style.display = 'none'
            gentleSlide[num].style.display = 'block'
},1000) */

/* opacity랑 visiblity 서서히 나타나는 애니메이션 */

//우리는 여기서 각각의 reslide클래스에 i.style.display를 초기값인 none으로 설정해 초기화를 하고
        //맨 처음 설정하는 reslide slide66의 style.display를 display로 설정해야한다. 그럼 그냥
        //RegentleSlide[5]로 맨 처음값을 block으로 설정하면 되는것 아닌가 라고 하겠지만
        //여기서 RegentleSlide[0]부터 [5]까지 전부 하나하나 설정하기엔 어려우므로
        // for(let i of RegentleSlide) 를 통해 하나로 통합하여 style.display를 none으로바꾼 후
        // RegentleSlide[5].style.display를 block으로 바꿀 것이다/

const gentleSlide = document.querySelectorAll('.gentle_slide_container .slide')
const SlidecurrentNum = document.querySelector('.page_number .current')
const SlidetotalNum = document.querySelector('.page_number .total')
console.log(gentleSlide, SlidecurrentNum, SlidetotalNum)

/* 슬라이드 총 번호 표시 */


let num = 0
console.log(gentleSlide)
//12345 012345 012345
/* tentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용 */

SlidetotalNum.textContent = gentleSlide.length
SlidecurrentNum.textContent = num+1 //초기값
const currentNumber = setInterval(function(){
    console.log('넘기기까지' + num++)
    if(num > gentleSlide.length-1) {num = 0}
    SlidecurrentNum.textContent = num
},1000)

for(let i of gentleSlide){
i.style.transition = 'opacity 0.5s'}

const slideTimer = setInterval(function(){
    console.log('넘기기까지' + num++)
    if(num > gentleSlide.length-1)
        num = 0
        for(let i of gentleSlide){
            i.style.visiblity = 'hidden'
            i.style.opacity = '0'
        }
            gentleSlide[num].style.visibility = 'visible'
            gentleSlide[num].style.opacity = '1'
},1000)

/* =================================================================================== */

const RegentleSlide = document.querySelectorAll('.gentle_slide_container2 .reslide')
console.log(RegentleSlide)
let Renum = RegentleSlide.length-1;

const ReSlideInterval = setInterval(function(){
    console.log('넘기기까지' + Renum--)
    if(Renum  < 0)
        Renum = RegentleSlide.length-1;
        for(let a of RegentleSlide){
            a.style.display = 'none'
        }
            RegentleSlide[Renum].style.display = 'block'
    
}, 1000) 

/* =========================== */