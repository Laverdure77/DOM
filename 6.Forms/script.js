/*
*/

// add listener on first form window: span id="display-firstname"

let dspFrstNm = document.querySelectorAll( 'input')[0];
dspFrstNm.value = "";
console.log(dspFrstNm.value);

dspFrstNm.addEventListener('keyup', (e)=>{
    let frstNmInput = document.querySelector("#display-firstname");
    /* let txt = frstNmInput.textContent; */
    frstNmInput.textContent = dspFrstNm.value;
    console.log(e);
    console.log(frstNmInput.textContent);


}

);
// add listener on second form widow, to display hidden section if age >18y
let dspAge = document.querySelector("section input[name='age']");
console.log(dspAge);
dspAge.value = "";
dspAge.addEventListener( 'keyup' , (e)=>{
    let ageInput = dspAge.value;
    console.log(ageInput);
    if (ageInput > 18) {
        let hidden = document.querySelector("#a-hard-truth");
        console.log(hidden);
        hidden.style.visibility= "visible";
    }
})

// add listener to display red window form if passwords are different.


let pwd = document.querySelector("section input[name='pwd']");
let pwdCfrm = document.querySelector("section input[name='pwd-confirm']");
pwd.value = "";
pwdCfrm.value = "";

// listener to display red color if pw is less than 6 characters
pwd.addEventListener('keyup', (e)=>{
    let pwdInput = pwd.value;
    let pwdCfrmInput = pwdCfrm.value;
    console.log(pwdInput);
    console.log(pwdCfrmInput);
    if((pwdInput.length >= 6)){
    pwd.style.color = 'green'
    }
    else { 
        pwd.style.color = 'red'
        pwdCfrm.style.color = 'red'
    }
})

// listener to display red dots when confirmation pw is different from pwd, green if the same.
pwdCfrm.addEventListener('keyup', (e)=>{
    let pwdInput = pwd.value;
    let pwdCfrmInput = pwdCfrm.value;
    if(!(pwdCfrmInput == pwdInput)){
    pwdCfrm.style.color = 'red'
    }
    else { 
        pwdCfrm.style.color = 'green'
    }
})


