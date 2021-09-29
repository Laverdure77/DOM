/*
*/
/* console.log(document.title); */
var x = document.title;
console.log(x);
document.title = "Modifying the DOM";

var c = document.body.children;
  var txt = "";
  var i;
  for (i = 0; i < c.length; i++) {
    txt = txt + c[i].tagName + "<br>";
  }
