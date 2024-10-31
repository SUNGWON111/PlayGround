/**
border-left-width를 borderLeftWidth로 변경하기
중요도: 5
"my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.

대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

예시:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
힌트: split을 사용해 문자열을 배열로 바꾼 다음 join을 사용해 다시 합치면 됩니다.
 */
//sol 1)
// function camelize(str) {
//   const strArr = [];

//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i - 1] === "-") strArr.push(str[i].toUpperCase());
//     else strArr.push(str[i]);
//     // console.log(str[i]);
//   }
//   const camel = strArr.filter((ele) => ele !== "-").join("");

//   console.log(camel);
//   return camel;
// }

//sol2)
function camelize(str) {
  const camel = str
    .split("-")
    .map((ele, idx) => (idx === 0 ? ele : ele[0].toUpperCase() + ele.slice(1)))
    .join("");
  console.log(camel);
}

camelize("background-color"); //== "backgroundColor";
camelize("list-style-image"); //== "listStyleImage";
camelize("-webkit-transition"); //== "WebkitTransition";
