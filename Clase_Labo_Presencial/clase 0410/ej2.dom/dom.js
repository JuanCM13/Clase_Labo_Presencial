console.log(window);
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.links);
console.log(document.links[1]);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
console.log(document.title);
console.log(document.characterSet);
console.log(document.documentElement.lang);
console.log(document.documentElement["lang"]);

// Selectores
// for(let i=0; i < items.length; i++){
//     console.log(items[i]);
// }

console.log(document.getElementsByName("nombre"));

console.log(document.getElementById("parrafo1"));
const $p1 = document.querySelector("#parrafo1");

console.log(document.getElementsByClassName("rojo"));
console.log(document.querySelectorAll(".rojo")[0]);

const items = document.getElementsByTagName("li");
console.log(items);
console.log(document.querySelectorAll("div li"));

let texto = `<p class="pepe">esto es un texto
 <b>Esto se ve en negrita</b> para rellenar
 el parrafo</p>`;

$p1.outerHTML = texto;

// atributos

const $linkGoogle = document.querySelector("a");

console.log($linkGoogle.href);
console.log($linkGoogle.getAttribute("href"));
console.log($linkGoogle.hasAttribute("target"));

$linkGoogle.setAttribute("target", "_blank");

console.log($linkGoogle.hasAttribute("target"));

$linkGoogle.removeAttribute("target");

console.log($linkGoogle.hasAttribute("target"));

const $lista = document.querySelectorAll("ul")[1];


console.log($lista.getAttribute("data-description"));
console.log($lista.dataset.description);


// estilos

const $li = document.querySelector("ul").firstElementChild;

console.log($li);

console.log($li.style);
console.log($li.getAttribute("style"));
//$li.style.backgroundColor = "blue";
$li.style.setProperty("background-color","cyan");


//----------------------------------------------------------------------------------------------------------

/*Dom Traversing*/


/*Para evitar ponerle id a todo, accedemos desde un elemento
A sus hijos etc..*/

const $cards = document.getElementById("cards");

console.log($cards.childNodes); //Me trae los nodos hijos, sin importar tipp

console.log($cards.children); //Me trae los hijos directos en este caso las fotos

console.log($cards.parentElement); //Me trae el padre del id que le pase antes, en este caso el body

console.log($cards.firstChild); //Me trae el primer elemento hijo, en este caso la primer figure

console.log($cards.lastElementChild); //Me trae el ultimo elemento hijo,

console.log($cards.children[1]); //Me trae el nodo hijo que le indique via index

//Ir al hermano osea mismo nivel,. en este caso de la section de card, es el enlace a home

console.log($cards.previousSibling); //Me trae al hermano del elemento el previo, en este caso me trae el A

//para traerme al otro hermano que le sigue es

console.log($cards.nextElementSibling); //Me trae el segundo hermano, en este caso la etiqueta script

console.log($cards.closest("main")); // La referencia mas cercana del tipo main en este caso, ignora al padre y todo tipo de etiqu7eta englobante -- //Si no tiene, te tira null



//Referencia a cualqui9er elemento
console.log($cards.querySelector("figcaption")); // me devuelve el primer fig que encuentre
console.log($cards.querySelectorAll("figcaption")); // me devuelve un nodelist con todos los figs que encuentre
//Los queryselectorall pòdes recorrerlos con un foreach


let hijo = $cards.firstChild; //Guardo la referenciua de x elemento
console.log(hijo);


// while(hijo.nextSibling) //voy recorriendo todos los hermanos del elemento hijo del $cards
// {
//     console.log(hijo);
//     hijo = hijo.nextSibling;
// }
do
{
    console.log(hijo); ////voy recorriendo todos los hermanos del elemento hijo del $cards
    hijo = hijo.nextSibling;
}
while(hijo.nextSibling);


//PREGUNTAS
console.log($cards.hasChildNodes()); //ME TRAE UN BOOLEANO INDICANDO SI TIENE O NO un elemento nodo hijo






//------------------------------------------------------------------------------------------------


//CREAR ELEMENTOS DESDE JS

const $newCard = document.createElement("figure"); //me crea en memoria un nodo de tipo figure


//NODO IMG
const $img = document.createElement("img"); //creo el nodo solo
$img.setAttribute("src","https://placeimg.com/200/200/any"); //le asigno el source attribute a la imagen, sino se crea pelada
//y le asigno la url
$img.setAttribute("alt","Fotro random"); //asigno el nombre alternativo via js


//Crear un figcaptiuon
const $figCap = document.createElement("figcaption"); //creo el fig caption etiqueta
const nodoTexto = document.createTextNode("Any"); //creo el elemento text y ya le asigno el valor

//Asigno la etiqueta texto al elemento fiig
$figCap.appendChild(nodoTexto);

$newCard.appendChild($img); //le agrego al new card, la imagen...
$newCard.appendChild($figCap); //Asigno al nuevo figure , su proxumo hijo que seria el figcap, dewspues de la imagen.. 
$cards.appendChild($newCard); //lo agrega comno ultimo hijo



//MANEJO DE CLASES------------------------------------------------

//Le agrego la clase, con el classList.add, para no pisar la clase, sino que las va concatenando..:
$newCard.classList.add("card"); //Le agrego la clase, para que se actualice como las demas figures
$newCard.classList.add("rotar-45");
$newCard.classList.remove("rotar-45");

_boolA = $newCard.classList.contains("rotar-45"); // me indica con bool si tiene o no la clase
console.log(_boolA); //me tira false, todo ok

$newCard.classList.toggle("rotar-45"); //me devuelve un nodeList con los elementos que tengan esa clase agregada


//Caminito, cree un figure, cree una imagen, le asigne url y alt, eso lo enchufe al figure,
//cree un tipo figcaption, le agrego un tipo texto ya creado, y se lo asigno al figure
//agrego imagen y figure al $newCard, y ese new Card le agregue la clase...



//-----------------------------------------------------------------------------------------------

//voy volcando la data del array de frutas, al listado de frutas...

const frutas = ["banana","pera","sandia","kiwi"];

const $listaFrutas = document.createElement("ul"); 

$listaFrutas.innerHTML = ""; // Lo inicialio vacio, sino rompe
frutas.forEach((fruta)=>{
   $listaFrutas.innerHTML += `<li> ${fruta} </li>`; //Voy agregando elementos al listado de frutas, creando con sintaxis html
});


//Lo agrego al DOM

document.body.appendChild($listaFrutas); //le agrego al body, un nuevo hijo, seria agregarle directamente al body el listado


let nombres = `Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe
Pepe`;

console.log(nombres.split("\n")); //Va rompiendo la cadena por los \n

const nombresDeArray = [
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe",
    "Pepe"
];


const $refOl = document.querySelector("ol");

/*Para no hacerlo a lo cavernicola, y renderizar la pagina 80 veces
nombresDeArray.forEach((el)=>{

});*/

//Se usa esta forma de tirar todo en un ul, y volcarlo dentro del ol, despues no se renderiza el ul, sino solo los elementos:

let fragmento = document.createDocumentFragment();

nombresDeArray.forEach((el)=>{
     const $li = document.createElement("li"); //creo un li
     $li.textContent = el;  //le asigno el nombre
     fragmento.appendChild($li);  //lo asigno al fragmento
});

//una vez terminado hago una sola insercion

$refOl.appendChild(fragmento); //Chequear, que el ul solo los envuelve, en el html del runtime no se ve reflejado, solo los ol con los li

//--------------------------------------------------------------------------------------

   

//BUSCAR:
/*InsertAdjacentElement()

-prepend() //
.before()// los 3 reciben nodos y texto 
.after()//
.append() //-recibe solo nodos
*/

//EJERCICIO:

//hacer funcion constructora que cree una tabla con toda la data del archivo de data.js, devuelve objeto tabla completa con THEAD, TBODY, CON
//TODA LA DATA PARSEADA DE CADA OBJETO, USAR FUNCIONES PARA CREAR OBJETO, MAPEARLO Y SACAR LOS NOMBRES DE LAS COLUMNAS Y AGREGAR LOS VALORES
//Hacerla con estilo basico de tabla. 


//BUSCAR CUSTOOM ATTRIBUTE