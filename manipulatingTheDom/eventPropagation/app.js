//DOM MANIPULATION

//EVENT PROBAGATION

window.addEventListener("click", function() {
    console.log('Window');
    // e.stopPropagation()
},true);

document.addEventListener("click", function() {
    console.log('Document');
},true);

document.querySelector(".div2").addEventListener("click", function() { //e for event
    console.log('DIV 2');
},true);

document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV 1');
},true);

document.querySelector("button").addEventListener("click", function(e) {
    //TODO
    //console.log(e.target)
    // console.log(e);
    console.log(e.target.innerText = 'clicked');
},true);
