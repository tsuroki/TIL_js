/* console.log(Math)
console.log(Math.PI)
let num1 = Math.floor(3.7)
console.log(num1)
let num2 = Math.round(3.7)
console.log(num2)
num2 = Math.round(3.2)
console.log(num2)
let num3 = Math.random(3.7)
console.log(num3)

console.log(Math.floor())
console.log(Math.round())
console.log(Math.random()*4) 
console.log(Math.floor(Math.random()*100)) */

// 10% 20% 30% 40% 50%
const couponDB = ['10%', '20%', '30%', '40%', '50%']
const couponBtn = document.querySelector('#coupon')

//버튼 클릭 시, 쿠폰 5개 중 1개가 랜덤하게 alert 출력메세지 실행

couponBtn.addEventListener('click', () => {
    const RandomNumber = Math.floor(Math.random()*5)
    alert(couponDB[RandomNumber])
})

const adZone = document.querySelector('.ad a')
const imgzone = document.querySelector('.ad a img')

//랜덤 넘버 생성
const RandomNum = Math.floor(Math.random()*2)
console.log(RandomNum)

imgzone.src = adDB[RandomNum].src
adZone.href = adDB[RandomNum].link
imgzone.alt = adZone.children[0].name

//더치페이
const Calcbtn = document.querySelector('#calc')
const CostInput = document.querySelector('#cost')
const CostPerson = document.querySelector('#person')
const ResultCost = document.querySelector('.result')
//총금액 / 인원수 = 계산결과
//계산하기 버튼 클릭시
Calcbtn.addEventListener('click', ()=> {
    console.log(CostInput.value/CostPerson.value)
    const Costcalc=CostInput.value/CostPerson.value
    console.log(Math.round(Costcalc))
    const costPerPerson=Math.round(Costcalc)
    ResultCost.children[0].textContent = costPerPerson.toLocaleString('ko-kr')
})

// 소수점 반올림 Math.round()

/* =========================== */
//체크 할 변수
// 동작 과정
/* 1 . 버튼 클릭시
    2. 최저가 표시
    2-1. DB안에 있는 Cost 배열 지정 => DB.price
    2-2 DB.price 중 최저가 추적 Math.min(DB.price) 
    2-3 최저가 표시 => MinPrice에*/

    //1
    const minPriceBtn = document.querySelector('#min-price-btn')
    /* const pp = [1000,2000,3000,4000]//test */
    console.log(shopDB)
    minPriceBtn.addEventListener('click', () => {
        const pricemap = shopDB.map(i => i.price)
        console.log(Math.min(...pricemap))
        const Total= Math.min(...pricemap)
        const Mindisplay = document.querySelector('.minprice')
        Mindisplay.textContent = Total
    })

    // 2
    /* const minPriceBtn2 = document.querySelector('#min-price-btn')
    console.log(shopDB)
    minPriceBtn2.addEventListener('click', () => {
        //배열을 새로 받을 빈 변수
        const pricearray = []
        for(let i of shopDB){
            console.log(i)
            console.log(i.price)
            pricearray.push(i.price) //pop 및 push
            console.log(pricearray)
        }
        console.log(Math.min(...pricearray))
        const Mindisplay = document.querySelector('.minprice')
        Mindisplay.textContent = Math.min(...pricearray)
    }) */



        /* for(let i of shopDB){
            console.log(i)
        } */
        // 스프레드 연산자 / spread : ... /여러 배열값을 한번에 처리하는 배열처리법
        /* console.log(Math.min(...pp))
        console.log(Math.max(...pp)) */
        // 1. 쇼핑몰, 상품명, 가격을 가지고 있는 배열에서 가격만 추출
        // 2. 추출한 가격에서 최저가 찾기
    
    // 배송비 무료,최저가 찾기 클릭시
    // shopDB2에 접근해서 
    // price와 delivery 중 가장 낮은 값을 찾아
    // 표시하기

    //1. 변수
    const lowBtn = document.querySelector('#lowest')
    const deloBtn = document.querySelector('#delivery')
    const result1 = document.querySelector('.result1')
    const result2 = document.querySelector('.result2')
    const shopListul = document.querySelector('#shoplist')

    //2. btn 이벤트 클릭 만들기
    // 2-1. lowBtn
    console.log(shopDB2)
    lowBtn.addEventListener('click', () => {
        // => 화살표 자체를 return으로 본다.
        /* const pricemap = shopDB2.map(function(i){
            //함수식
            return i.price
        }) */
        const pricemin = shopDB2.map(i => i.price)
        result1.textContent= `최저가 : ${Math.min(...pricemin)}`

        //최저가 -> 최고가 오름차순 정렬하기
        //매개변수 순서를 이용한 오름차순 (계산속성 기준) a.price - b.price
        //매개변수 순서를 이용한 내림차순 (계산속성 기준) b.price = a.price
        const sort = [...shopDB2].sort((a , b) => a.price-b.price)
        console.log(sort)

        //반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입
        //for~in. for ~of, forEach
        for(let i of sort){
            const li = document.createElement('li')
            li.innerHTML = `<a href="#">${i.name}</a>`
            li.innerHTML += `<span>${i.price}원</span>`
            console.log(li)
            shopListul.appendChild(li)
        }
    })



    deloBtn.addEventListener('click', () => {
        // => 화살표 자체를 return으로 본다.
        /* const pricemap = shopDB2.map(function(i){
            //함수식
            return i.price
        }) */
        const deliverymin = shopDB2.map(i => i.delivery)
        result2.textContent= `배송비 : ${Math.min(...deliverymin)}`
    })
    console.log('================')
//최고가 순 정렬
// shopDB2가 아닌 1에 접근
const sorthigh = document.querySelector('#sorthigher')
const highlistUl = document.querySelector('.highlist') 
console.log(shopDB)

sorthigh.addEventListener('click',()=>{
    /* console.log([...shopDB].sort((a , b) => b.price-a.price)) */
    //sort는 비교를 위해 2가지 비교군을 준비해야한다.
    //우리가 수학시간에 a=10이고 b=12일때, a>b라고 했던 것 처럼
    //그렇다면 [...shopDB]는  shopDB에 들어있는 []/배열 안의 객체들을 ... 라는 명령어를 통해 하나로 묶어 표현한다.
    //그래서 console.log([...shopDB])를ㄹ 쓰면 shopDB안 내용들이 []안에 정렬되어 하나의 배열로 만들어 진다.
    //이 때 sort라는 명령어는 여러개의 index 중 2개를 골라 순차적으로 비교를 하는데
    //지금 현재 shopDB에서 price를 비교해야 하므로 .sort((a , b) => b.price-a.price)를 작성한 것.
    //b.price - a.price를 풀어보면 b는 a다음에 오기 때문에 b.price가 만약 네이버 하루견과의 1900원이고, a.price는 쿠팡 하루견과의 2000원이므로
    // - 라는 연산자를 통해 2000-1900 = 100원이라는 양수를 얻게 된다.
    // 이와 같이 마켓컬리(2100)-네이버스토어(1900) = 200원 이라는 양수를 얻고
    // 마켓컬리(2100)-쿠팡(2000)=100원이라는 결과를 얻는다
    // 그렇게 되면 네이버하루견과<쿠팡하루견과 라는 결과를 얻고
    // 마켓컬리하루견과>네이버하루견과 라는 결과를 얻으며
    // 마켓컬리>쿠팡하루견과 라는 값이 나오므로
    //마켓컬리>쿠팡>네이버 순으로 값의 크기배열이 이루어 진다.
    //이를 배열로 나타내면 가장 큰 마켓컬리가 0번 인덱스를
    // 두번쨰로 큰 쿠팡이 1번 인덱스를
    // 마지막으로 2번 인덱스를 차지하므로
    // [마켓컬리, 쿠팡, 네이버] 순으로 인덱스를 차지하게 된다.
    console.log([...shopDB].sort((a , b) => b.price-a.price))
    
    //그럼 이 배열을 객체로 묶어버리자.

    const indexHigherDB = [...shopDB].sort((a , b) => b.price-a.price)

    //이 배열에서 for 구문을 통해 배열 속 인덱스 객체를 가져온다.

    for (let i of indexHigherDB){
        console.log(i)
        console.log(i.price) //이 콘솔을 통해 가격만 가져올 수 있음을 알 수 있으며 3번의 반복을 통해 각각의 값을 3번 출력한다는 것을 알 수 있다<div className=""></div>
        //처음 2100을 li로 만들어 보자.
        const NewhigherList = document.createElement('li')
        console.log(NewhigherList) // list를 만들어내는데 성공했으면 li안에 innertext를 통해 iprice로 정렬된 인덱스의 i.name을 넣어보자.
        /* NewhigherList.innerText=`${i.name}` */
        //해당 함수를 통해 만들어보면 제일 낮았던 네이버 스마트 스토어만 결과값으로 남는데, =가 이전에 있었던 값을 없애고 새로 덮어씌워버리는 연산자로 작용하기 때문에
        NewhigherList.innerText = `${i.name}${i.price}원`
        //복합 연산자인 +=를 통해 li를 쌓아간다.
        //말 그대로 NewhigherList의 값이 복합연산을 통해
        //<li>마켓컬리</li>
        //<li>쿠팡</li>
        //<li>네이버 스토어</li>가 된다. (아래의 !로 이동)
        highlistUl.appendChild(NewhigherList)
        //지역변수를 제대로 적용시킴과 동시에 li 3개를 순차적으로 쌓아 추가하여 list를 추가한다. 버튼을 계속 누르게 되면 쌓이므로 이걸 멈추기위해 분기를 나눈다.
    }
    // 하지만 이대로 맨 마지막에 넣으면 !
    /* highlistUl.appendChild(NewhigherList) */
    //NewhigherList가 지역변수이기 때문에 바깥 전역에서는 인식이 되지 않으므로 (위쪽 *로 이동)
})

