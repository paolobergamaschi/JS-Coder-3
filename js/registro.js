const mailregistro = document.getElementById("mailregistro")
const passwordregistro = document.getElementById("passwordregistro")
const registrarse = document.getElementById("registrarseBtn")


registrarseBtn.addEventListener("click", crearUsuario)
function crearUsuario(){
    const correo = mailregistro.value;
    const passw = passwordregistro.value;
    const usuarioCreado = new usuario (correo,passw)  
    console.log("Usuario creado con el correo " + correo)
    localStorage.setItem("usuario", JSON.stringify(usuarioCreado))
}    
function usuario(mail,password){
this.mail = mail;
this.password = password;
}


const botonSiguiente = document.getElementById("botonSiguiente")

botonSiguiente.addEventListener("click", function(){
    if(mailregistro.value === ""){
      mailregistro.focus();
    }
    else if(passwordregistro.value === ""){
        passwordregistro.focus();
    }
    else{
    window.location.href = "../pages/lista.html"}
})
