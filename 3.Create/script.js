/*
*/

/* let section = document.createElement('section');
section.innerHTML = ' learner name ';
article.appendChild( section ); */
const beCodeStudent = [
    {
        id: 1,
        firstname: "Antoine",
        lastname: "Ghysens"
    },
    {
        id: 2,
        firstname: "Baptiste",
        lastname: "Geron"
    },
    {
        id: 3,
        firstname: "Bathsheba",
        lastname: "Deepijan"
    },
    {
        id: 4,
        firstname: "Bruno",
        lastname: "Presti"
    },
    {
        id: 5,
        firstname: "",
        lastname: ""
    },
    {
        id: 6,
        firstname: "Fabrice",
        lastname: "Castrogiovanni"
    },
    {
        id: 7,
        firstname: "Fanny",
        lastname: "Fraiture"
    },
    {
        id: 8,
        firstname: "Francis",
        lastname: "FranÃ§ois"
    },
    {
        id: 9,
        firstname: "Frederic",
        lastname: "Van Overmeire"
    },
    {
        id: 10,
        firstname: "JC",
        lastname: "Molhant"
    },
    {
        id: 11,
        firstname: "Maxim",
        lastname: "K."
    },
    {
        id: 12,
        firstname: "Michael",
        lastname: "Tesfay"
    },
    {
        id: 13,
        firstname: "Philippe",
        lastname: "Meulemans"
    },
    {
        id: 14,
        firstname: "Raoni",
        lastname: "Gillet"
    },
    {
        id: 15,
        firstname: "Stephane",
        lastname: "Genet"
    },
    {
        id: 16,
        firstname: "Thomas",
        lastname: "Backers"
    },

] 

beCodeStudent.forEach(element => {
    
    //Random Color
    let r = Math.floor( (Math.random()*255));
    let g = Math.floor( (Math.random()*255));
    let b = Math.floor( (Math.random()*255));
    let rdmcolor = 'rgb('+r+','+g+','+b+')';
    let dl = 100;
    if ((r<dl)&&(g<dl)&&(b<dl)) {
        let tcolor = "white";
    }
    else{
        tcolor= "black"
    }
    // paragraphe for each Object in the beCodeStudent Array
    let p = document.createElement("p");
    p.innerText= `${element.firstname} ${element.lastname}`;
    p.style.backgroundColor = rdmcolor;
    p.style.color = "tcolor";
    let article = document.querySelector('article');
    article.appendChild(p);
        
});
