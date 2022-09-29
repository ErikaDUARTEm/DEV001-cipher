import cipher from './cipher.js';

const $ = (selector) => document.querySelector("selector");
let letras= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 
"W", "X", "Y", "Z"]; 
const cifrar = encode(letras);
const entrada = document.getElementById("entrada");
const cifrador = document.getElementById("cifrar");
const desplazamiento = $(".desplazamiento");
const iniciarSesion = () => {
    $(".btn-iniciar").addEventListener("click", (e) => {
        e.preventDefault();
        let nombre = $(".nombre-usuario").value;
        $(".nombre-usuario").innerHTML= nombre-usuario; 
        $(".iniciar").classList.add("ocultar");
        $(".principal").classList.add("mostrar");
        $(".iniciar").classList.remove("ocultar");
  };
};