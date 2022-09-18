const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const charactersWithNoSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let charactersNoBigLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const charactersLilLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let genBtn = document.getElementById("genbtn")

let pass1 = []

let pass2 = []


let mainForm = document.forms.main
let mainFormInput = mainForm.amountInput

let bigLetters = mainForm.bigLetters
let otherSymbols = mainForm.otherSymbols





function passGeneration1(){
    if (bigLetters.checked == true && otherSymbols.checked == true) {
            for (i = 0; i < mainFormInput.value; i++) {
    pass1.push(characters[Math.floor(Math.random() * characters.length)])
    }} 
        else if (otherSymbols.checked == true && bigLetters.checked == false){
            for (i = 0; i < mainFormInput.value; i++) {
    pass1.push(charactersNoBigLetters[Math.floor(Math.random * charactersNoBigLetters.length)])
        }} 
        else if (bigLetters.checked == true && otherSymbols.checked == false) {
            for (i = 0; i < mainFormInput.value; i++) {
    pass1.push(charactersWithNoSymbols[Math.floor(Math.random() * charactersWithNoSymbols.length)])
    }} 
        else if (bigLetters.checked == false && otherSymbols.checked == false){
            for (i = 0; i < mainFormInput.value; i++) {
    pass1.push(charactersLilLetters[Math.floor(Math.random() * charactersLilLetters.length)])
        }
    }


    password1.textContent = pass1.join('')
    if (pass1.length > mainFormInput.value) {
        location.reload()
    }
}

function passGeneration2(){
    for (i = 0; i < mainFormInput.value; i++) {
    pass2.push(characters[Math.floor(Math.random() * characters.length)])
}
    password2.textContent = pass2.join('')
}

genBtn.addEventListener("click", function passRender(){
    passGeneration1()
    passGeneration2()
    console.log(pass1)
})


