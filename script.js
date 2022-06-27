
let button = document.getElementById("button")
let result = document.getElementById("result")
let form = document.getElementById("form")


let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

let password = []

function generatePassword(){
let lettersInput = document.getElementById("letters").value
let numbersInput = document.getElementById("numbers").value
let symbolsInput = document.getElementById("symbols").value
    for (let i = 0; i < lettersInput; i++){
        let result = Math.floor(Math.random() * letters.length)
        password.push(letters[result])
    
    }
    for (let i = 0; i < numbersInput; i++){
        let result = Math.floor(Math.random() * numbers.length)
       password.push(numbers[result])
        
    
    }
    
    for (let i = 0; i < symbolsInput; i++){
        let result = Math.floor(Math.random() * symbols.length)
        password.push(symbols[result])
       
    
    }

    function shufflePassword(passwordList) {
        for (let i = passwordList.length - 1; i > 0; i--) {
            let p = Math.floor(Math.random() * (i + 1));
            [passwordList[i], passwordList[p]] = [passwordList[p], passwordList[i]];
        }
    }
   shufflePassword(password)
  

   result.innerHTML= "Your password : "+ password.join("")
   password=[]
 
}


button.addEventListener("click",  function (){
    generatePassword()
    form.reset()
   
   

})

let input = document.querySelectorAll(".userinput");

input.forEach(el => {
    el.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
      
          document.getElementById("button").click();
        }
      });

    })
let help = document.getElementById("help")

help.addEventListener("click", function(){
    help.innerHTML =  "*Fill the input areas and press the button or \"Enter\" key <br/> Example: letters: 2 numbers: 3 symbols: 2 <br/> Password: 2e!6f*8"

})

