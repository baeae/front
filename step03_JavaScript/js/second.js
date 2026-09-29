//h2태그에[ mouseover, mouseout 이벤트를 적용하고 싶다.
// 1) 이벤트를 적용할 대상(element)찾기
const h2 = document.getElementById("h2");
console.log(h2);

// 2) 이벤트를 등록
//onmouseover 는 반드시 모두 소문자 작성
// h2.onmouseover = test2(); // test2()는 즉시실행(함수지금 호출한다.)
h2.onmouseover = test2; //test2 함수를 연결만한다(등록한다)
h2.onmouseout = function () {
  //익명함수 - 재사용 못함
  console.log("mouseout했어요...");
};
