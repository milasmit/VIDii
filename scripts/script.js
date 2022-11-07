// JavaScript Document
console.log("Howdy!");

var eersteHoed = document.querySelector("ol:nth-of-type(2) li:nth-of-type(2) button")

eersteHoed.addEventListener("click", tekstwolk)

function tekstwolk(){
    var tekstEersteHoed = document.querySelector("section:nth-of-type(2) article")

    tekstEersteHoed.classList.toggle('visible')
}