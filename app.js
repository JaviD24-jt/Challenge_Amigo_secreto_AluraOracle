let input_amigos = [];
let ul_lista_amigos =document.getElementById('listaAmigos');
let ul_resultado = document.getElementById('resultado')
let boton_amigo = document.getElementById("amigo");
let bandera = "Sortear amigo";

function LimpiarAmigo(){
    let valor_caja = document.querySelector("#amigo");
    valor_caja.value = '';
};

function AgregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if (amigo == "" && boton_amigo.disabled == false) {
        document.getElementById("amigo").setAttribute('placeholder', "Por favor ingresa un nombre válido");
    }else {
        input_amigos.push(amigo);
        console.log(input_amigos);
        LimpiarAmigo();
        document.getElementById("amigo").setAttribute('placeholder', "Escribe un nombre");
        ul_lista_amigos.innerHTML += `<li>${amigo}</li>`;
    }
};

function SortearAmigo(){
    if(bandera =="Sortear amigo"){
        let numero = Math.floor(Math.random() * input_amigos.length);
        let sorteo = input_amigos[numero];
        ul_resultado.innerHTML = `<li> El amigo secreto es: ${sorteo}</li>`;
        boton_amigo.disabled = true;
        bandera="Reiniciar";
        document.getElementById("BotonSorteo").innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícono para reiniciar">${bandera}`;
    }
    else if(bandera=="Reiniciar"){
        let input_amigos = [];
        boton_amigo.disabled = false;
        ul_resultado.innerHTML = `<li></li>`;
        ul_lista_amigos.innerHTML = `<li></li>`;
        bandera="Sortear amigo";
        document.getElementById("BotonSorteo").innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícono para reiniciar">${bandera}`;     
    };
};