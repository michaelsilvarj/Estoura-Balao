function addBola () {
  
  var vermelho = new Array('00','33','66','99','CC','FF' ,'F4');
  var verde = new Array("00","33","66","99","CC","FF",'F4');
  var azul = new Array("00","33","66","99","CC","FF",'F4');

  var indice1 = Math.floor(Math.random()*7);
  var indice2 = Math.floor(Math.random()*7);
  var indice3 = Math.floor(Math.random()*7);

  cor_atual  = "#" + vermelho[indice1] + verde[indice2] +  azul[indice3];

/*
  var indice1 = Math.floor(Math.random()*256);
  var indice2 = Math.floor(Math.random()*256);
  var indice3 = Math.floor(Math.random()*256);

  cor_atual  =  vermelho + "," + verde + "," +  azul ;
  console.log(cor_atual)


*/
   

  
  var bola = document.createElement("div");
  bola.setAttribute("class", "bola",);
  var p1 = Math.floor(Math.random() * 500);
  var p2 = Math.floor(Math.random() * 400);
  bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px; background-color:"+ cor_atual);
  bola.setAttribute("onclick", "estourar(this)");
  document.body.appendChild(bola);
 }
 
 function estourar(elemento) {
  document.body.removeChild(elemento);
 }
 
 function iniciar () {
  setInterval(addBola, 2000);
 }
 
 function numeroInteiroRandomico(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
 } 