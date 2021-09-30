/*
*/
var qSA = document.querySelectorAll('p.important');
/* console.log(qSA);
console.log(qSA [0]); */

qSA.forEach(element => {

    element.setAttribute("title", "This is important");
    
});



var image = document.querySelectorAll('img');
/* console.log( image);
console.log( image[0]);
console.log(image[1]); */

for (let x = 0; x < image.length; x++) {
   if (!(image[x].classList.contains('important'))) {
       image[x].style.display='none';
   }
}

let paragraphe= document.querySelectorAll('p');


paragraphe.forEach(element => {
    console.log(element.textContent);
    console.log(paragraphe);
    if (element.classList.length >0) {
        console.log( element.className);
    }
});

paragraphe.forEach(element => {
    
    if (!(element.classList.length >0)) {
        let r = Math.floor( (Math.random()*255));
        let g = Math.floor( (Math.random()*255));
        let b = Math.floor( (Math.random()*255));
        let color = 'rgb('+r+','+g+','+b+')';
        element.style.color= color;
    }
});
