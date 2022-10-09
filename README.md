![image text](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-cipher/main/img/national%20security.jpg)
## 1. Preámbulo
National Security es un software de Encriptación dirigido a empresas o instituciones, donde se requiera mantener una estrategia de seguridad para prevención de actos delictivos; Gracias a National Security los integrantes de estas empresas o instituciones podrán comunicar sus objetivos, rutas de vigilancia, horarios de cambio de guardia, y todo lo relacionado con mantener la seguridad y la protección de los trabajadores y de sus instalaciones; Y de esta manera los integrantes del grupo de seguridad ingresan con usuario y contraseña para cifrar o descifrar lo antes pactado.

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.
![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Resumen del proyecto
  Al inicio, se elaboro un prototipo digital, el cual se presenta a continuación:
  ![prototipo](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-cipher/main/img/screenshotdeprototipo.png)
  ![prototipo2pag](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-cipher/main/img/prototipo2png.png)
  
## 3. Dirigido a el usuario
En un principio, se pensó hacer una App de solo una página, donde se procedia a Cifrar o Descifrar un mensaje. Sin embargo, pensando en que fuera una App más segura donde solo puedan usarla cierto grupo de personas autorizadas, se le añadio la validación de usuario y contraseña; Además, reflexionando en la experiencia del Usuario y en facilitarle el uso de misma, se modificó lo que en un principio de estableció en el prototipo, y  la página 2 se dividio en 3 pasos, al igual, que se cambio la ubicación de los botones y de la entrada del número de desplazamiento. Adicionalmente, El usuario no necesita cortar o pegar el mensaje si luego de escrito y cifrado desea descifrarlo de nuevo, sino que solo debe presionar el botón descifrar.
  
##Instrucciones de uso
  Para usar National Security debes estar registrado con un usuario y contraseña; el usuario y contraseña por defecto es:
###### Usuario: Admin
###### Contraseña: 123456
  ![imagen-inicio](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-cipher/main/img/IngresoDeUsuarioYContrase%C3%B1a.png)
 
 Luego de iniciar sesión podrás ver los pasos a seguir:
  1. Debes elegir el número de desplazamiento que deseas aplicar a tu mensaje para cifrarlo o descifrarlo.
  2. Debes Ingresar tu mensaje.
  3. Debes presionar el botón según lo que desees hacer, Cifrar o Descifrar.
  
  ![image-mensaje](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-cipher/main/img/CifraroDescifrar.png)
  
## 5. Resolución de problemas
  Con el uso de National Security evitamos que se filtre información importante a la que no debería de acceder personas no autorizadas. Además se previenen actos delictivos contra la empresa o institución que decida implementar este software de seguridad.

## 6. Consideraciones Importantes
  Se debe tomar en cuenta, que National Security trabaja con el alfabeto inglés, por tanto, a pesar de que acepta la letra Ñ en el mensaje, ésta no es cifrada, al igual sucede con los signos de interrogación  y demás caracteres especiales.




  
