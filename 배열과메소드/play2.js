/**
특정 범위에 속하는 요소 찾기
중요도: 4
배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.

새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.

예시:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (조건에 맞는 요소)

alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.
 */
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((ele) => ele >= a && ele <= b);
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);
