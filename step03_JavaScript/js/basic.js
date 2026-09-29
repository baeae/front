// 자바스크립트 순서 : 코드가 작성된 시점부터 아래로
/*여러줄 주석 or 부분주석*/

//브라우저에 출력하기
//document.write("<h1>안녕</h1>"); // 자바스크립트에서 마크업 가능 // 외부로 뺄때는 write 못씀

//콘솔에 출력하기
console.log("어디에 출력되니?");

//h2태그에 onclick했을때 css적용하는 기능 작성 함수 작성
function test(i) {
  console.log("test함수호출해야 실행되어요^^ = " + i);
  //클릭된 element에 css를 적용하고 싶다!!
  i.style.backgroundColor = "red";
  i.style.color = "white";

  //h3 태그에 css를 적용하고싶다. ->
  //  1) h3 객체를 찾는다. -> id로 찾기
  const h3 = document.getElementById("a"); //const : 상수 , (객체는대부분 상수에 담음)
  console.log(h3);

  //  2) 찾은 객체에 css적용한다.
  h3.style.border = "5px double orange";
}

function test2() {
  console.log("test2 호출됨!!!!!");
}
