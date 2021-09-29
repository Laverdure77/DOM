/*
*/
/* console.log(document.title); */
var x = document.title;
console.log(x);
document.title = "Modifying the DOM";

var c = document.body.children;
console.log(c);

function child (x){
  var txt = "";
  var i;
  for (i = 0; i < c.length; i++) {
  txt = txt + c[i].tagName + "<br>";
  } 
  console.log (txt);
}

child (c);

function changeBodyBg(){
  let r = Math.floor((Math.random() * 255) + 1);
  let g = Math.floor((Math.random() * 255) + 1);
  let b = Math.floor((Math.random() * 255) + 1);
  var thergb = "rgb(" + r + "," + g + "," + b + ")"; 
  console.log(thergb);
  document.body.style.background=thergb;
}
console.log 
changeBodyBg();
