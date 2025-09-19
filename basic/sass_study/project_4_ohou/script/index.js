//적업 html 동적 요소가 무엇이 있는지.
// 1. 변수 2. 초기값 설정 3. 이벤트, 함수 설정
// 1) 상품 이미지에 마우스 올릴 시 큰 이미지 변경
// 2) 저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
// 3) 리뷰 클릭 시 스크롤 이동
// 4) 가격정보 클릭 시 정보 팝업 출력/숨기기
// 5) 주문 목록 초기 숨기기
// 6) 사이즈 select 초기 비활성화 -> (색상 선택 시 활성화)
// 7) 색깔과 사이즈 모두 선택 시 주문목록 출력(선택한 값이 출력, 주문 금액 변경 됨)
// 8) 주문목록 X 클릭 시 주문 목록 삭제, 주문 금액 초기화.
// 9) 주문목록 클릭 시 재고 수량까지 주문수량 + 주문금액 표시
// 10) 주문목록 - 클릭 시 주문수량 + 주문금액 감소 (수량이 1이라면 경고창 출력.)
// 11) (상품 미 선택시) 장바구니, 바로구매 클릭 시 '상품 선택하세요' 경고창 출력
// 12) (상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지 이동

// 1) 상품 이미지에 마우스 올릴 시 큰 이미지 변경
//1-1) 변수
const bigImage = document.querySelector('.container .left .overview img')
const smallImage =  document. querySelectorAll('#thumbnail a img')

console.log(bigImage, smallImage)

//1-2) 초기값 설청 (첫번째 썸네일 a가 보이고 있단 뜻)
smallImage[0].style.border = '2px solid #0aa5ff'
smallImage[0].style.borderRadius = '5px'
smallImage[0].style.transform = 'scale(1.2)'
smallImage[0].style.transition = 'transform 0.3s'
smallImage[1].style.transition = 'transform 0.3s'
// * 두번째 썸네일에 마우스를 올리면, 큰 이미지가 두번째 썸네일 이미지로 바뀌며, border가 활성화 됨.
smallImage[0].addEventListener("mouseover", () => {
    bigImage.src = smallImage[0].src
    smallImage[0].style.border = '2px solid #0aa5ff'
    smallImage[0].style.borderRadius = '5px'
    smallImage[1].style.border = '0'
    smallImage[0].style.transform = 'scale(1.2)'
    smallImage[1].style.transform = 'scale(1.0)'
})
smallImage[1].addEventListener("mouseover", () => {
    bigImage.src = smallImage[1].src
    smallImage[1].style.border = '2px solid #0aa5ff'
    smallImage[1].style.borderRadius = '5px'
    smallImage[0].style.border = '0'
    smallImage[1].style.transform = 'scale(1.2)'
    smallImage[0].style.transform = 'scale(1.0)'
})
/* transform-origin: center; 
transition: scale(1.2) 0.3s;*/

//1-3) 이벤트 함수 설정

// 로그인 정보 저장
//true == 로그인
//false == 로그아웃

localStorage.setItem('isLogin','true')

//2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
const bookMark = document.querySelector('#scrap')
let loginStatus = ''
loginStatus = localStorage.getItem('isLogin')
console.log(bookMark)
console.log(loginStatus)

//로그인 상태 일 시 wish.html
//3. 북마크를 누를 시 / 로그인 상태에 따라 / 연결되는 창이 달라야함.
bookMark.addEventListener('click', () => {
    //북마크 클릭시 -> 로그인 상태 가져옴
    localStorage.getItem('isLogin')
    if (loginStatus == 'true') {
        bookMark.href = "./wish.html" 
    } else {
        bookMark.href = "./login.html"
    }
})

//리뷰 클릭 시 리뷰 쪽으로 이동
// 1. 리뷰 변수 지정
const reviewMove = document.querySelector('#review .score')
const reviewWrap = document.querySelector('#review_container')
// 2. 클릭 이벤트 지정
reviewMove.addEventListener('click', moveMent)
function moveMent(e) {
    //스크롤 이동 window 함수 scrollTo(x,y)
    reviewMove.href = '#review_container'
    e.preventDefault()
    console.log(reviewWrap.offsetTop-56)
    window.scrollTo(0,reviewWrap.offsetTop-56)
}

const stickyMenu = document.querySelector('.sticky_menu')
const stickyMenuProduct = document.querySelector('.sticky_menu a:nth-child(1)')
const stickyMenuReview = document.querySelector('.sticky_menu a:nth-child(2)')
console.log(stickyMenu,stickyMenuProduct, stickyMenuReview)

const productWrap = document.querySelector('#product_info')
const ReviewContainerWrap = document.querySelector('#review_container')

stickyMenuProduct.addEventListener('click', (e) => {
    e.preventDefault(), contentsPstFunc(productWrap)})
stickyMenuReview.addEventListener('click', (e) => {
    e.preventDefault(), contentsPstFunc(ReviewContainerWrap)})

function contentsPstFunc(target){
    console.log(target.offsetTop-56)
    return window.scrollTo(0,target.offsetTop-56)
} 
// 4) 가격정보 클릭 시 정보 팝업 출력/숨기기
const priceInfoBtn = document.querySelector('.price_info a')
const priceInfo = document.querySelector('.price_info .info')
console.log(priceInfo, priceInfoBtn)

let infoBoolean = false;
//infoBoolean의 상태를 클릭할 때 마다 값(infoBoolean) 반전
priceInfoBtn.addEventListener('click', () => {
    infoBoolean = !infoBoolean; // 기억해둘것
    if(infoBoolean){
        priceInfo.style.display = 'block'
    }
    else{
        priceInfo.style.display = 'none'
    }
    console.log(infoBoolean)
})

/* =========================================================공부할것==================================================== */

// 5) 주문 목록 초기 숨기기 order_list
//오더리스트 변수
const orderList = document.querySelector('.order_list')
//컬러 sel 변수
const colorSelect = document.querySelector('#color_sel')
//사이즈 sel 변수
const sizeSel = document.querySelector('#size')
orderList.style.display = 'none'
// 6) 사이즈 select 초기 비활성화

// 7) 색깔과 사이즈 모두 선택 시 (선택한 인덱스가 0이 아닌것) - 콘솔 '선택완료'
// 주문목록 출력(선택한 값이 출력, 주문 금액 변경 됨)
sizeSel.disabled = true

const totalOrderPrice = document.querySelector ('.order_cost p span')
const selPrice = document.querySelector('.sel_price')

colorSelect.addEventListener('change', ()=>{
    console.log(colorSelect.selectedIndex)
    console.log(colorSelect.options[0])
    //색상 secet에서 첫번째를 제외한 나머지 선택시 select size 할성화
    //색상 selecet에서 색상을 고른다.
    if(colorSelect.selectedIndex != 0){
        sizeSel.disabled=false
        //사이즈 이벤트 작성위치
        sizeSel.addEventListener('change',
            () => {
            //사이즈 옵션 Index 0가 아닌 것.
                    if (sizeSel.selectedIndex != 0)
                        {
                        console.log('선택완료')
                        orderList.style.display = 'block'
                        /* ========================================= */
                        console.log(orderList.children[0].children[0])
                        console.log(orderList.children[0].children[1])
                        let orderColor = colorSelect.options[colorSelect.selectedIndex].text;
                        let orderSize = sizeSel.options[sizeSel.selectedIndex].text;
                        //let orderColorReplace = orderColor.replace(찾는값, 변경값)
                        //정규표현식 시작과 끝 표시 / 검사표현식검사내용 /
                        //괄호찾기 \찾는 문자\   \(.*\)
                        //모든 내용 .*
                        let orderSizeReplace = orderSize.replace (/\(.*\)/, '')
                        let orderColorReplace = orderColor.replace(/\(.*\)/, '')
                        orderList.children[0].children[0].textContent = orderColorReplace;
                        orderList.children[0].children[1].textContent = orderSizeReplace;
                        // 7) 색깔과 사이즈 모두 선택 시 주문목록 출력(선택한 값이 출력, 주문 금액 변경 됨)
                        //주문금액 표시
                        totalOrderPrice.textContent = (productOptDB[0].price).toLocaleString('ko-kr')
                        
                        } else {orderList.style.display = 'none'}
                })
        }
            else {
                sizeSel.disabled=true}
            })
    
    //이떄 one은 고르지 않는다.

console.log(orderList, sizeSel)
// 1. JS에서 HTML 함수로 생성 createElement()
const colorOpt1 = document.createElement('option')
const colorOpt2 = document.createElement('option')
console.log (colorOpt1,colorOpt2)
// 2. 위에서 생성한 함수에 DB데이터 대입 innerHTML, textContent
colorOpt1.textContent = `${productOptDB[0].color[0]}(${(productOptDB[0].price).toLocaleString('ko-kr')}원)`
colorOpt2.textContent = `${productOptDB[0].color[1]}(${(productOptDB[0].price).toLocaleString('ko-kr')}원)` 
// 3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
colorSelect.appendChild(colorOpt1)
colorSelect.appendChild(colorOpt2)
/* 생성한 태그가 li이면 ul or ol의 마지막 자식 위치로 삽입 */
/* 생성한 태그가 option이면 select의 마지막 자식 위치로 삽입 */

const closeList = document.querySelector('.close')
console.log(closeList)


closeList.addEventListener('click', ()=> {
    orderList.style.display = 'none'
    totalOrderPrice.textContent = '0'
    colorSelect.selectedIndex = 0
    sizeSel.selectedIndex = 0
    sizeSel.disabled= true
})

// 9) 주문목록 클릭 시 재고 수량까지 주문수량 + 주문금액 표시
// 1. + 버튼을 눌렀을 때
// 2. 주문 수량이 1씩 상승해야 하나
// 3. 주문 수량이 stock 수량을 초과해서는 안된다.
const addBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const totalAmount = document.querySelector('#amount')
let num = 1
totalAmount.value = num
/* const totalOrderPrice = document.querySelector ('.order_cost p span') / 총 주문 가격
const selPrice = document.querySelector('.sel_price') */ //현재 선택 항목 수량 가격
addBtn.addEventListener('click', () => {
    if (num < productOptDB[0].stock){
    num++;
    minusPlusFunc()
    } else {
        alert (`현재 재고 수량은 ${productOptDB[0].stock}개 입니다. 주문 수량은 재고 수량을 초과할 수 없습니다.`)
    }})

// 10) 주문목록 - 클릭 시 주문수량 + 주문금액 감소 (수량이 1이라면 경고창 출력.)

minusBtn.addEventListener('click', () => {
    if (num > 0){
    num--
    minusPlusFunc()
} else {
    alert(`최소 주문 수량은 1개 입니다.`)
    }})

function minusPlusFunc() {
    totalAmount.value = num
    let total = num * productOptDB[0].price
    totalOrderPrice.textContent = total.toLocaleString('ko-kr')
    selPrice.textContent = total.toLocaleString('ko-kr')
}

// 1. - 버튼을 눌렀을 때
// 2. 주문 수량이 1씩 감소하나
// 3. 주문 수량이 1보다 작아지면 안되며
// 4. 0이 되면 경고 메세지가 출력되며
// 5. 다시 1로 돌아간다.


// 11) (상품 미 선택시) 장바구니, 바로구매 클릭 시 '상품 선택하세요' 경고창 출력
const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')

console.log(cartBtn, buyBtn)

cartBtn.addEventListener('click', ()=> {
    cartBuyFunc('./cart.html')
})

buyBtn.addEventListener('click', ()=> {
    cartBuyFunc('./buy.html')
})

function cartBuyFunc (url) {
    if(colorSelect.selectedIndex == 0 || sizeSel.selectedIndex == 0){
        alert('상품을 선택하지 않았습니다. 상품을 선택해 주세요.')
    } else {loginStatus=localStorage.getItem('isLogin')
            if(loginStatus == 'true'){
            buyBtn.onclick.textContent = `"location.href=${url}"`
        } else {buyBtn.onclick.textContent="location.href='./login.html'"}
}}

// 12) (상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지 이동

/* bookMark.addEventListener('click', () => {
    //북마크 클릭시 -> 로그인 상태 가져옴
    localStorage.getItem('isLogin')
    if (loginStatus == 'false') else {
        bookMark.href = "./login.html"
    }
}) */