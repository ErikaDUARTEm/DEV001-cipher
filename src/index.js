
import cipher from './cipher.js';
const S= (selector) => document.querySelector(selector);
// usuario registrado
let usuarios = {
  name:"Erika Duarte",
  password:123456
 }  
 

 //borrar usuario y contraseña
const borrar = () => {
  S(".btn-borrar").addEventListener("click", (e) =>{
    location.reload();
  })
}
  borrar();
// validar usuario para iniciar sesion
const validarUsuario = () =>{
  
  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;
    if (usuario === "") return alert("Debes ingresar tu nombre de usuario");  
    if (password === "") return alert("Debes ingresar tu contraseña");
    if (usuario === "Erika Duarte" && password === "123456") {
          S(".iniciar").classList.add("ocultar");
          S(".iniciar").classList.remove("mostrar");
          S(".principal").classList.add("mostrar");
          S(".principal").classList.remove("ocultar");
          S(".usuario").innerHTML= usuario;
  } else{
    alert("El usuario y contraseña son incorrectos");
  }
}
S(".btn-iniciar").addEventListener("click", validarUsuario);

let abc ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";