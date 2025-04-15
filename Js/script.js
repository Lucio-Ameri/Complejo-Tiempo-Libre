//
document.addEventListener("DOMContentLoaded", function () {

  const itemsCarrusel = document.querySelectorAll(".ItemC"); //Selecciona todos los elementos del carrusel con la clase .ItemC, que son las tarjetas del carrusel.
  const botonesMenu = document.querySelectorAll(".ItemM"); // Selecciona todos los elementos del menú con la clase .ItemM, que corresponden a los botones de navegación.
  const total = itemsCarrusel.length; //Obtiene la cantidad total de elementos en el carrusel, calculando el número de tarjetas presentes.

  botonesMenu.forEach((boton, index) => { //Utiliza forEach para recorrer todos los botones del menú. La variable boton es el botón actual, y index es su índice dentro de la lista de botones.
      
      boton.addEventListener("click", () => { // Cuando un botón es clickeado, ejecuta la función dentro del evento.

          botonesMenu.forEach(b => b.classList.remove("activo")); //Primero, se eliminan las clases "activo" de todos los botones del menú.
          boton.classList.add("activo"); //se agrega la clase "activo" al botón que fue clickeado, destacando el ítem seleccionado.

            
          const siguiente1 = (index + 1) % total; //Calcula los índices de los botones "siguiente" utilizando el operador módulo (%). Esto asegura que el índice sea circular (es decir, después del último índice, vuelve al primero).
          const siguiente2 = (index + 2) % total; //siguiente1 es el siguiente ítem, y siguiente2 es el ítem dos posiciones después.

          itemsCarrusel.forEach((item, i) => { //Recorre todas las tarjetas del carrusel (itemsCarrusel), usando forEach. La variable item es el elemento actual y i es su índice.
              
              const contenido = item.querySelector(".Contenido"); //Dentro de cada tarjeta, selecciona el elemento con la clase .Contenido, que probablemente sea el área de texto o detalles de la tarjeta.

              if (i === index) { //Si el índice de la tarjeta es el mismo que el índice del botón seleccionado (index), se configura esta tarjeta como la activa. Se ajustan las propiedades CSS para mostrarla en el lugar correcto y con el estilo adecuado.
                  

                //Se ajustan varias propiedades CSS para colocar la tarjeta en la parte frontal (cambiando zIndex), mostrarla en su tamaño completo (width, height), y hacerla completamente visible (opacity).
                  item.style.top = "0";
                  item.style.left = "0";
                  item.style.transform = "translate(0, 0)";
                  item.style.width = "100%";
                  item.style.height = "100%";
                  item.style.borderRadius = "0";
                  item.style.opacity = "1";
                  item.style.zIndex = "100";
                  contenido.style.display = "block";

              } 
              
              else if (i === siguiente1) {  //Si el índice de la tarjeta es el siguiente al seleccionado (siguiente1), se ajustan las propiedades para que se muestre parcialmente, colocándola en una posición desplazada y con un tamaño más pequeño.
                  

                //La tarjeta siguiente se muestra parcialmente, con menos opacidad y un tamaño más pequeño.
                  item.style.top = "55%";
                  item.style.left = "67%";
                  item.style.transform = "translateY(-70%)";
                  item.style.width = "180px";
                  item.style.height = "250px";
                  item.style.borderRadius = "20px";
                  item.style.opacity = "1";
                  item.style.zIndex = "110";
                  contenido.style.display = "none";

              } 
              
              else if (i === siguiente2) { //Similar al caso anterior, pero para la tarjeta dos lugares después del seleccionado (siguiente2).
                    

                //Similar a la tarjeta siguiente 1, pero con una posición ligeramente diferente.
                  item.style.top = "55%";
                  item.style.left = "calc(67% + 200px)";
                  item.style.transform = "translateY(-70%)";
                  item.style.width = "180px";
                  item.style.height = "250px";
                  item.style.borderRadius = "20px";
                  item.style.opacity = "1";
                  item.style.zIndex = "110";
                  contenido.style.display = "none";

              } 
              
              else { //Si la tarjeta no es la seleccionada ni las siguientes, se oculta desplazándola fuera de la vista y ajustando su opacidad a 0.
                    

                //Se mueve la tarjeta fuera de la vista (fuera de la pantalla) y se oculta su contenido.
                  item.style.left = "200vw"
                  item.style.top = "55%";
                  item.style.transform = "translateY(-70%)";
                  item.style.width = "180px";
                  item.style.height = "250px";
                  item.style.borderRadius = "20px";
                  item.style.opacity = "0";
                  item.style.zIndex = "110";
                  contenido.style.display = "none";
              }
          });
      });
  });

    //Si existen botones en el menú, simula un clic en el primer botón para inicializar el carrusel con el primer ítem activo.
    if (botonesMenu.length > 0) {
        botonesMenu[0].click();
    }
});

