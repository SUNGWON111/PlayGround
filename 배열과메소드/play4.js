// 내림차순으로 정렬하기
// 중요도: 4
// let arr = [5, 2, 1, -10, 8];

// 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.

// alert( arr ); // 8, 5, 2, 1, -10

let arr = [5, 2, 1, -10, 8];

function descendingOder(arr) {
  arr.sort((a, b) => b - a);
}

descendingOder(arr);
console.log(arr);
