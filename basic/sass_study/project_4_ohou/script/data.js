//data.js
//웹&앱에서 반복되는 레이아웃 및 내용은 HTML 제작 단계에서 1개만 제작하고
//나머지는 JS등의 스크립트 언어를 통해서
//서버에서 저장된 data를 불러와
//html에 반복 출력하는 개념으로 사용한다.
//상품 선택 DB
const productOptDB = [{
        name: '몽셸 패딩 하네스 올인원',
        color : ['블랙', '라즈베리'],
        size: ['S', 'SM', 'L'],
        price: 39900,
        stock : 10
    }
    ,
    {
        name: '냉장고',
        color : ['블랙', '회색'],
        size: ['LG2', 'SM3', 'VG43'],
        price: 39900,
        stock : 30
    }
] 