const validarEmail = email => {
    const regex =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let esValido = regex.test(email)
    console.log(esValido)

    const validateMessage = document.getElementById("Message")
    let text = document.createTextNode("")
    

    if(esValido){
        text = "Request accepted"
        validateMessage.append(text)
        validateMessage.classList.add("secundary-color")
    } else {
        text = "Oops! Please check your email"
        validateMessage.append(text)
        validateMessage.classList.add("error")
    }
}