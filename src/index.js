import cipher from './cipher.js';
const S= (selector) => document.querySelector(selector);


// usuario registrado
let usuarios = {
  name:"Erika Duarte",
  password:"123456"
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
  
  let usuario = document.getElementById("usuario");
  let password = document.getElementById("password");
    if (usuario.value === "") return alert("Debes ingresar tu nombre de usuario");  
    if (password.value === "") return alert("Debes ingresar tu contraseña");
    if (usuarios.name === "Erika Duarte" && usuarios.password === "123456") {
          S(".iniciar").classList.add("ocultar");
          S(".iniciar").classList.remove("mostrar");
          S(".principal").classList.add("mostrar");
          S(".principal").classList.remove("ocultar");
          S(".usuario").innerHTML= usuarios.name;
  } else{
    alert("El usuario y contraseña son incorrectos");
  }
} 

S(".btn-iniciar").addEventListener("click", validarUsuario);

//capturar numero de desplazamiento y textarea
//letra en valor ASCII


   S(".btn-cifrar").addEventListener("click", () => {
   let numeroD= S(".offset").valueAsNumber;
   let textOriginal =  S("#entrada").value.toUpperCase();
   let resultado = cipher.encode(numeroD,textOriginal); 
   console.log(resultado);
   document.getElementById("entrada").classList.remove("ver");
   document.getElementById("entrada").classList.add("nover");
   document.getElementById("resultado").classList.remove("nover");
   document.getElementById("resultado").classList.add("ver");
   S(".resultado").innerHTML = resultado;
  });
  
  