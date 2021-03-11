(function() {

    //Variables

    let lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar")

    //Funciones

    var agregarTarea = function() {
        alert("Agregar tarea")
    };
    var comprobarInput = function() {
        alert("Comprobar tarea")
    };
    var eliminarTarea = function() {
        alert("Eliminar tarea")

    };



    //Eventos

        //Agregar Tarea

        btnNuevaTarea.addEventListener("click", agregarTarea);

        //Comprobar input

        tareaInput.addEventListener("click", comprobarInput)

        // Borrando elementos de la lista

        for (let i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", eliminarTarea);
        }



}());