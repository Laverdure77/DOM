const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){

  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  
}


const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}



//  function to create a new square
function newSquare (squareColor){
  
  let divSQR = document.createElement('div');
  divSQR.classList.add('displayedsquare');
  divSQR.style.backgroundColor = squareColor;
  let squareSectionParent = document.querySelector('.displayedsquare-wrapper');
  squareSectionParent.appendChild(divSQR);
  setListener(divSQR, squareColor);

}

// function to add click listener on each new square, and alert color

function setListener( el, clr ) {
            // Dynamic elements event listener
            el.addEventListener( 'click', function() {
                alert( 'Square color is ' +clr);
            } );
          }

//Random color




// function to create a new li with log
function newLog (y) {
  
  let timeSQR = getElapsedTime();
  /* let type = y.target.classList[1]; */
  let liSQR = document.createElement('li');
  
  liSQR.innerText = '['+ timeSQR+'] Created a new ' + y +' square';
  let logList = document.querySelector('ul');
  logList.appendChild(liSQR);
}


//Targeting each square by color

let actionSquare = document.querySelectorAll('.actionsquare-wrapper');
/* console.log(actionSquare); */
let allSquare = actionSquare[0].children;
let greenSquare = allSquare[0];
let violetSquare = allSquare[1];
let orangeSquare = allSquare[2];
/* console.log( greenSquare) */


// event listener for each static square



greenSquare.addEventListener( 'click', ()=>(
  newSquare( 'lime' ),
  newLog ( 'lime ')
))

violetSquare.addEventListener( 'click', ()=>(
  newSquare( 'magenta'),
  newLog ('magenta')
))

orangeSquare.addEventListener( 'click', ()=>(
  newSquare('orange'),
  newLog ('orange')

))

// Random body background color

let body = document.querySelector( 'body');

function bGColor() {
  let r = Math.floor( (Math.random()*255));
  let g = Math.floor( (Math.random()*255));
  let b = Math.floor( (Math.random()*255));
  let rdmcolor = 'rgb('+r+','+g+','+b+')';
  body.style.backgroundColor = rdmcolor
} 

// delete log

function delLog() {

  let ul = document.querySelector('ul');
  console.log(ul)
  let sectDel= ul.children[0];
  console.log(sectDel);
  ul.removeChild(sectDel);
}
// delete generated square

function delSquare(){

 let dispSQR = document.querySelector(".displayedsquare-wrapper");
 let delSQR = dispSQR.children[0];
 dispSQR.removeChild(delSQR);

}

// event listener on SPACEBAR, LKEY, SKEY.

body.addEventListener( 'keydown', (e)=>{
  console.log(e.key )
  console.log(e)
  if (e.key == ' ') {
    bGColor() 
  }
})  

body.addEventListener( 'keydown', (e)=>{
  console.log(e.key)
  console.log(e)
  if (e.key == 'l' ) {
    delLog()
  }
})  

body.addEventListener( 'keydown', (e)=>{
  console.log(e.key)
  console.log(e)
  if (e.key == 's' ) {
    delSquare()
  }
})  


