//적업 html 동적 요소가 무엇이 있는지.
// 1. 변수 2. 초기값 설정 3. 이벤트, 함수 설정
// 1) 상품 이미지에 마우스 올릴 시 큰 이미지 변경
// 2) 저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
// 3) 리뷰 클릭 시 스크롤 이동
// 4) 가격정보 클릭 시 정보 팝업 출력/숨기기
// 5) 주문 목록 초기 숨기기
// 6) 사이즈 select 초기 비활성화 -> (색상 선택 시 활성화)
// 7) 색깔과 사이즈 모두 선택 시 주문목록 출력(선택한 값이 출력, 주문 금액 변겨오딤)
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
smallImage[0].style.transition = 'transform 0.3s'
smallImage[1].style.transition = 'transform 0.3s'
// * 두번째 썸네일에 마우스를 올리면, 큰 이미지가 두번째 썸네일 이미지로 바뀌며, border가 활성화 됨.
smallImage[0].addEventListener("mouseover", () => {
    bigImage.src = smallImage[0].src
    smallImage[0].style.border = '2px solid #0aa5ff'
    smallImage[1].style.border = '0'
    smallImage[0].style.transform = 'scale(1.2)'
    smallImage[1].style.transform = 'scale(1.0)'
})
smallImage[1].addEventListener("mouseover", () => {
    bigImage.src = smallImage[1].src
    smallImage[1].style.border = '2px solid #0aa5ff'
    smallImage[0].style.border = '0'
    smallImage[1].transform = 'scale(1.2)'
    smallImage[0].transform = 'scale(1.0)'
})
/* transform-origin: center; 
transition: scale(1.2) 0.3s;*/

//1-3) 이벤트 함수 설정

// 로그인 정보 저장
//true == 로그인
//false == 로그아웃