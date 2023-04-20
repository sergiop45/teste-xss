document.ElementById("searchfield").value="";
document.ElementById("keySearch").value="";
function apagaBody() {
  var body = document.querySelector('body');
  body.innerHTML = '<h1 style="color: red">Esse site esta sobre meu genjutsu</h1>';
}
function message() {
	alert("Site hackeado!!!!")
}
setTimeout(message, 8000)
setTimeout(apagaBody, 15000);

