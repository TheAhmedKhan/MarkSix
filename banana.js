var Tbutton=document.querySelector("button");
var inputbox=document.querySelector("#translate-input");
var outputbox=document.querySelector("#translate-output");

Tbutton.addEventListener("click",buttonClickHandler);
var url = "https://api.funtranslations.com/translate/minion.json"

function buttonClickHandler(event) {
    console.log("button clicked");
    var input = inputbox.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            outputbox.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
    
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}