//Aquí deben ir los objetos cipher encode y decode

const cipher = {
    encode(numeroD, textOriginal){
        let cadenaAbc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let textMayus = textOriginal.split("");
        let textoCifrado = "";
        let ASCII = 0;
           for(let i= 0; i < textMayus.length; i++) {
              if(cadenaAbc.indexOf(textMayus[i]) != -1) {
               ASCII = ((textMayus[i].charCodeAt() - 65 + numeroD) %26 + 65);
                textoCifrado += String.fromCharCode(ASCII);
              } else {
                textoCifrado += textMayus[i];
            }   
          } 
          return textoCifrado; 
  },

   decode(numeroD, textOriginal){

  },
};

export default cipher;
