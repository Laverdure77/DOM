/*
*/
//1
const ol = document.querySelector('ol');
const olChildren = ol.children;
const firstOl = ol.children[0];
let lastOl = ol.children[4];

lastOl=ol.insertBefore(lastOl,firstOl);

// 2
const section = document.querySelectorAll( 'section');
/* console.log(section);
console.log( section[1]); */
let title2= section[1].children;
let h22 = title2[0];
/* console.log(h22) */
const newh23 = h22;
let section2 = section[2].children;
/* console.log(section2) */
let div1 = section2[0];
/* console.log(div1); */
let h23 = div1.children[0];
/* console.log(h23); */

// Replace title H2 from section 2, with title H2 from section 3/div
h22 = section[1].replaceChild(h23,h22);  
/* console.log(newh23);
console.log(h23); */
// As title from section3/div is deleted, create new one, with value of old section2 h2
let newNodeh23 = document.createElement("h2");
newNodeh23.textContent= newh23.firstChild.textContent;
console.log(newNodeh23);
let firstchildDiv1 = div1.firstChild;
div1.insertBefore(newNodeh23,firstchildDiv1);




// 3
//Delete section 3
let main = document.querySelector('main');
let sectDel= main.children;
main.removeChild(sectDel[2]);