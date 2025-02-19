# Explicacion del reto: Challenge_Amigo_secreto_AluraOracle
## Variables globales: 
- input_amigos: inicializa una lista vacia
- ul_lista_amigos: Permite en la función **AgregarAmigo** mostrar los amigos ingresados y en **SortearAmigos** quitar esa linea 
- ul_resultado: Permite ser usados en la función de: **SortearAmigos** e indicar quien es el amigo secreto
- boton_amigo: Permite modificar texto del botón de input de los amigos
- bandera: Nos ayuda como bandera y también como cambio de palabra en la función **SortearAmigos**

## Funciones: 
**LimpiarAmigo():**
Está función limpia el ingreso del nombre cada vez que el jugador de click en añadir

**AgregarAmigo(): **
Con cada ingreso que dé el jugador está funcion añade a la lista vacia el nombre del amigo escogido, además de mostrar debajo los nombres seleccionados; si esta vacio el campo y da click en añadir le indicará que debe ingresar algo; también controla el cambio de frase, cuando se detiene el juego con un validador *AND* 

**SortearAmigo():**
Es la función más larga, reiniciará el juego a través de la bandera, mostrará el amigo secreto sacado en un método Math(), desactivará el botón de añadir ya que termina el juego y permite volver a jugar; si se vuelve a jugar, limpiará los amigos escogidos, dejará la lista global vacia y quita  el amigo secreto escogido.
