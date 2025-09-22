// 상, 하, 좌, 우 버튼 클릭 시 캐릭터 10px 이동
const moveBtn = document.querySelectorAll('.btn')
const character = document.querySelector('#map img')
console.log(moveBtn,character)
let num = 0;

//상
moveBtn[0].addEventListener('click', (e) =>{
    num += 10;
    console.log(num)
    character.style.transform = `rotate(90deg) translateX(-${num}px)`
    character.style.transformOrigin = e.pageX
})
console.log(moveBtn[0])
//하
moveBtn[1].addEventListener('click', (e) =>{
    num += 10;
    console.log(num)
    character.style.transform = `scale(-1) translateX(-${num}px)`
    character.style.transformOrigin = e.pageX})
//좌
//우
// input 입력창에 영어로 이동방향 작성했을 때 캐릭터 10px 이동
const controlInput = document.querySelector('#txt')
console.log(controlInput)
// 1. input 입력창에
// 2. 영어로 이동방향 작성
// 3. enter 누르면
// 4. 이동
// 이동방향) left, right, top, bottom
controlInput.addEventListener('keyup', (e) => {
    if(e.key == 'Enter'){/* 
        console.log('Enter 확인')
        if (controlInput.value === 'left'){
            num += 10
            character.style.transform = `translateX(-${num}px)`
            console.log(character.style.transform)
        } else if (controlInput.value === 'right') {
            num -= 10
            character.style.transform = `translateX(-${num}px)`
            console.log(character.style.transform)
        } else if (controlInput.value === 'up') {
            num += 10
            character.style.transform = `translateY(-${num}px)`
            console.log(character.style.transform)
        } else if (controlInput.value === 'down') {
            num -= 10
            character.style.transform = `translateY(-${num}px)`
            console.log(character.style.transform)
        }
     */
    const inputVal = controlInput.value;

    if (inputval == 'left' || inputVal == 'right' || inputval == 'bottom' || inputVal=='top'){
        console.log (`${inputVal} 이동`)
        }

    } else {console.log('오답')}
    }
)

// 학점에 따라 A~F 등급 나오는 프로그래밍
//100~90 A
//89~80 B
//79~70 C
//70~60 D
//~59 F
const score = 90

console.log(score)

function gradeSystem (){
    if (score <= 100 && score >= 0) {
        if ( score >=90 ){console.log('A')}
        else if ( score >=80 ){console.log('B')}
        else if ( score >=70 ){console.log('C')}
        else if ( score >=60 ){console.log('D')}
        else if ( score < 60 ){console.log('F')}}
        else {
            console.log('0~100 사이의 값 입력할 것')
        }
        
}

//switch ~ case
//쇼핑몰 검색창에 사용자가 입력한 값 조건 확인
// 딸기 -> 1000원
// 사과 -> 2000원
/* const fruit =  prompt ('검색어를 입력하세요')
console.log(fruit);

switch(fruit){
    case '딸기' : 
        console.log('1000원');
        break; // 강제종료
    case '사과' : console.log('2000원'); break;
    default : consolg
    
} */

// wjsghk ekscnrzl

/* const phoneNumber = prompt('단축키입력')
console.log(phoneNumber)
switch(phoneNumber){
    case '1' :
        console.log (`엄마 전화 연결`);
        break;
    case '2' : 
        console.log (`아빠 전화 연결`);
        break;
    default :
        console.log ('해당 단축키 없음');
} */

//쇼핑몰 수량 + 가격 알고리즘
// - 버튼 클릭 시 수량 감소 + 가격 감소 ( 1일 때 - 누르면 경고 )
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const Amount = document.querySelector('#num')
const Price =  document.querySelector('.price')
const TAmount =  document.querySelector('h2 em')
const TPrice =  document.querySelector('h2 span')
let numVal = 1;
const price = 2000;
TAmount.textContent = "1"
TPrice.textContent = price
console.log(minusBtn, plusBtn, Amount, TPrice,TAmount,TPrice)


Amount.value = numVal; // 초기값 대입

minusBtn.addEventListener('click', () => {
    numVal == 1 ? console.log('최소구매수량') : numVal-- ;
    /* if( numVal == 1 ){console.log('최소구매 수량')}
    else {numVal-- ;} */
    return calculate()
})
plusBtn.addEventListener('click', () => {
    numVal < 20 ?  numVal++ : console.log('최대구매수량')
    /* if( numVal == 10 ){console.log('최대구매 수량')}
    else {numVal-- ;} */
    return calculate()
})

function calculate(){
    TAmount.textContent=numVal
    TPrice.textContent=Number(numVal*price).toLocaleString('ko-kr')
}