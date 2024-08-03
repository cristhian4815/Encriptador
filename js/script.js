const ingreseTexto = document.getElementById ("ingreseTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const textoEncriptar = document.getElementById("textoEncriptar");
const derecha = document.getElementById("derecha");


// Llaves de encriptación
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Creamos un arreglo para las llaves de encriptación

let reemplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const reemplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    
    muneco.style.display = "none";
    ingreseTexto.value = "";
    textoEncriptar.style.display = "none";
    botonCopiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    muneco.style.display = "block";  
    textoEncriptar.style.display = "block";
    botonCopiar.style.display = "none";
    derecha.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingreseTexto.focus();
}

botonEncriptar.addEventListener("click", () =>{
    const texto = ingreseTexto.value.toLowerCase()
    if (texto != ""){
        function encriptar(newText){
            for (let i = 0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1])
                };
            };
            return newText
        }
    
    } else {
        alert("Ingrese texto a encriptar");
        reset();
    }
    /*const textoEncriptado = encriptar(texto);*/
    reemplace (encriptar(texto));
});   

botonDesencriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value.toLowerCase();
    if (texto != ""){
        function desencriptar(newText){
            for (let i = 0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            };
            return newText
        }
    } else {
        alert("Ingrese texto a desencriptar");
        reset();
    }
    
    reemplace(desencriptar(texto));

    /*const textoDesencriptado = desencriptar(texto);
    mensajeFinal.innerHTML = textoDesencriptado;*/

});

botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy');
    reset();
   
})