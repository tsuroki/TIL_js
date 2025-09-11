// 함수
function func1 () {
    console.log('반복실행내용')
}
/* 대기상태 */

// 호출방법
// 함수명()
/* func1(); */

// 함수의 매개변수 활용
function storyfunc1(days,data1='조약돌') {
    console.log(`매개변수값 확인: ${data1}`)
    //헨젤과그레텔
    const person = ['헨젤', '그레텔']
    //조약돌 준비
    /* const mater = '조약돌' */
    //집 돌아간다 목표
    //헨젤과 그레텔이 조약돌을(를) 이용해서 집을 찾아갔습니다.
    //1일차 헨젤과 그레텔이 조약돌을(를) 이용해서 집을 찾아갔습니다.
    //2일차 헨젤과 그레텔이 빵부스러기을(를) 이용해서 집을 찾아갔습니다.
    //3일차 헨젤과 그레텔이 쌀을(를) 이용해서 집을 찾아갔습니다.
    console.log(`${days}일 차,${person[0]}과 ${person[1]}이 ${data1}을 이용해서 집을 찾아갔습니다.`)
}

function storyfunc2 (){/* 이야기 둘째날 실패사례 */
    //헨젤과그레텔
    const person = ['헨젤', '그레텔']
    //조약돌 준비
    const mater = '빵부스러기'
    //집 돌아간다 목표
    //헨젤과 그레텔이 빵부스러기를 이용했으나, 야생동물이 먹어버려 집을 찾아갈 수 없습니다.
    alert(`${person[0]}과 ${person[1]}이 ${mater}을 이용해서 집을 찾아갔습니다.`)
}

storyfunc1(1); //기본값 사용 시 매개변수 값 란을 공란으로 두어 전달안함.
storyfunc1('빵부스러기',2);
storyfunc1('쌀',3);

console.log("===================================================================")

//커피마다 다른 에스프레소 샷

function americano (menu, cups, shot=1) {
    console.log(`${menu}레시피`)
    console.log(`먼저 물 ${cups}컵을 채우고`)
    console.log(`에스프레소 ${shot}샷 채운다.`)
}

americano(`아메리카노`, 2);
americano(`에스프레소`, 0);

console.log("===================================================================")

//키오스크 주문 출력(배열 활용법)

function kiosk (HorI, kind, amount) {
    const temperature = ['따뜻한', '차가운']
    const menu = ['카페라떼', '아메리카노', '녹차라떼']

    // 배열 부여를 위해 2개의 변수 선언이 들어감.
    //오브젝트 형 메모리 1개당 -> 메모리 1개
    console.log(`${temperature[HorI]} ${menu[kind]} ${amount}잔 주문 완료되었습니다.`)

}

kiosk (0,0,2)
kiosk (1,1,1)
kiosk (0,2,2)
kiosk (1,1,1)

//키오스크 주문 출력(객체 활용법)

function kiosk_obj (hotice, cafekind, amount=0) {
    const cafemenu = {
        type : ['따뜻한','차가운'],
        menu : ['카페라떼', '아메리카노', '녹차라떼']
    }
    //속성 : 값 => 객체
    //전것 과 똣같으나, 선언양이 다르고, 하나의 행 안에서 속성이 2개가 한번에 정해짐.
    //오브젝트 형 메모리 -> 메모리 힙 2개
    console.log(`${cafemenu.type[hotice]} ${cafemenu.menu[cafekind]} ${amount}잔 주문 완료되었습니다.`)
}

kiosk_obj (0,0,2)
kiosk_obj (1,1,1)
kiosk_obj (0,2,2)
kiosk_obj (1,1,1)

console.log('-------------------리턴')

/* function plusFunc1(n1,n2){
    console.log(`${n1}+${n2}=${n1+n2}`)
}
function plusFunc2(n1,n2){
    alert(`${n1}+${n2}=${n1+n2}`)
} */
function plusFunc(n1,n2){
    let calc = `${n1}*${n2}=${n1*n2}`
    // calc = calc + '계산식'
    calc += `${n1}+${n2}=${n1+n2}`
    return calc
    /* 문제 1) 곱하기가 아닌 더하기만 출력됨.
    대입 연산자(=) 이전 변수값을 제거하고 새로운 값을 대입힌다.
    이전 변수값을 유지하고 새로운 값 추가 대입하는 연산자는?
    */
} //반환 결과만 내보낸다. -> 함수식을 진행하고 값을 출력함. 함수식을 종료하고 출력된 값을 반환함. (어디로? 선언된 곳으로)

console.log(plusFunc(1,2))/* 
alert(plusFunc(2,4)) */
/* plusFunc1(1,2)
plusFunc2(1,2) */

console.log('==========================================================================')

function dan99Func(num){
    let dan99total = '' //dan에 들어갈 값은 없으나, 식을 넣을거다. 아무거나 넣어봐라.
    dan99total += `${num} x 1 = ${num*1},` // 기존 dan99total = dan99total + ${num} x 1 = ${num*1},
    dan99total += `${num} x 2 = ${num*2},` // dan99total이 위에서 dan99total + ${num} x 1 = ${num*1}로 정의 되었으나,
    // 여기서 새로이 정의되어 dan99total = dan9total + `${num} x 2 = ${num*2},` 이라는 식으로 새로 정의 되었다.
    dan99total += `${num} x 3 = ${num*3},`
    dan99total += `${num} x 4 = ${num*4},`
    dan99total += `${num} x 5 = ${num*5},`
    dan99total += `${num} x 6 = ${num*6},`
    dan99total += `${num} x 7 = ${num*7},`
    dan99total += `${num} x 8 = ${num*8},`
    dan99total += `${num} x 9 = ${num*9}` 
    return dan99total
}
console.log(dan99Func(7))
//구구단함수 2~9
//출력예시 변수 * 변수 결과/

console.log('==================================')

//할인율 계산기
function discount (bank, dis) {
    const price = 1051000;

    const bankcard = ['국민카드','현대카드','삼성카드'];
    //카드사를 선택했을 때, 카드사에 대한 할인율이 따라와야 한다.

    const calc = (100-dis)/100//할인되는 양

    const totalPrice = price*calc;

    const result = `${bankcard[bank]}는 ${dis}할인, ${totalPrice.toLocaleString('ko-kr')}원`
//KB국민카드 5%
//현대 10%
//삼성 20%
    return result
}

console.log(discount(0, 5))
console.log(discount(1, 10))
console.log(discount(2, 20))

console.log('()=========================================================)')

//일반함수 예씨
function hello1 (user) {
return alert ('Hello'+ user)
}

//익명함수 예시
const hello2 = function() {
    alert ('Hello')
    return alert
}
hello2('KIM')

//익명함수 + 화살표 함수(es6)
const hello3 = (user) =>{
    return console.log('hello'+user)
}
hello3(lee)