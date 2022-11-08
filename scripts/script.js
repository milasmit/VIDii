// JavaScript Document
console.log("Howdy!");

// variabelen
var eersteHoed = document.querySelector("ol:nth-of-type(2) li:nth-of-type(2) button");

var grijzeHoed = document.querySelector("section:first-of-type button:nth-of-type(2)");

var oranjeHoed = document.querySelector("ol:nth-of-type(2) li:nth-of-type(7) button");

var donkerblauweHoed = document.querySelector("section:first-of-type button:nth-of-type(1)");

var bruineHoed = document.querySelector("ol:nth-of-type(2) li:nth-of-type(11) button");

var rondeHoed = document.querySelector("ol:nth-of-type(2) li:nth-of-type(6) button");

var deDoos = document.querySelector("ol:nth-of-type(2) li:nth-of-type(3) button");

var groeneHoed = document.querySelector("ol:nth-of-type(2) li:nth-of-type(12) button");



// eventListeners
eersteHoed.addEventListener("click", tekstwolk1);

grijzeHoed.addEventListener("click", tekstwolk2);

oranjeHoed.addEventListener("click", tekstwolk3);

donkerblauweHoed.addEventListener("click", tekstwolk4);

bruineHoed.addEventListener("click", tekstwolk5);

rondeHoed.addEventListener("click", tekstwolk6);

deDoos.addEventListener("click", tekstwolk7);

groeneHoed.addEventListener("click", tekstwolk8);



// functions
function tekstwolk1(){
    var tekstEersteHoed = document.querySelector("section:nth-of-type(2) article:first-of-type");

    tekstEersteHoed.classList.toggle('visible');
    eersteHoed.classList.toggle('verplaatsen');
}

function tekstwolk2(){
    var tekstTweedeHoed = document.querySelector("section:nth-of-type(2) article:nth-of-type(2)")

    tekstTweedeHoed.classList.toggle('visible')
    grijzeHoed.classList.toggle('verplaatsen')
}

function tekstwolk3(){
    var tekstDerdeHoed = document.querySelector("section:nth-of-type(2) article:nth-of-type(3)")

    tekstDerdeHoed.classList.toggle('visible')
    oranjeHoed.classList.toggle('verplaatsen')
}

function tekstwolk4(){
    var tekstVierdeHoed = document.querySelector("section:nth-of-type(2) article:nth-of-type(4)")

    tekstVierdeHoed.classList.toggle('visible')
    donkerblauweHoed.classList.toggle('verplaatsen')
}

function tekstwolk5(){
    var tekstVijfdeHoed = document.querySelector("section:nth-of-type(2) article:nth-of-type(5)")

    tekstVijfdeHoed.classList.toggle('visible')
    bruineHoed.classList.toggle('verplaatsen')
}

function tekstwolk6(){
    var tekstZesdeHoed = document.querySelector("section:nth-of-type(2) article:nth-of-type(6)")

    tekstZesdeHoed.classList.toggle('visible')
    rondeHoed.classList.toggle('verplaatsen')
}

function tekstwolk7(){
    var tekstZevendeHoed = document.querySelector("section:nth-of-type(2) article:nth-of-type(7)")

    tekstZevendeHoed.classList.toggle('visible')
}

function tekstwolk8(){
    var tekstAchtsteHoed = document.querySelector("section:nth-of-type(2) article:nth-of-type(8)")

    tekstAchtsteHoed.classList.toggle('visible')
    groeneHoed.classList.toggle('verplaatsen')
}