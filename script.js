let string = "";
let inputField = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if(buttonText === '='){
            try{

            string = eval(string);
            inputField.value = string;
            } catch (error){
                inputField.value = "Error";
                string = "";
            }

        }
        else if(buttonText === 'C'){
            string = ""
            inputField.value = string;
        }

        else{
        console.log(e.target)
        string = string + buttonText;
        inputField.value = string;
        }
    })
})