(function() {

    //Variables

    let lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar")

    //Funciones

    var agregarTarea = function() {
        let tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a")
            contenido = document.createTextNode(tarea);

        if(tarea === "") {
            tareaInput.setAttribute("placeholder", "Agregar una tarea");
            tareaInput.className = "error";
            return false;
        }

        // Agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // Le establecemos un atributo href
        enlace.setAttribute("href", "#");
        // Agregamo el enlace (a) a la nuevaa tarea
        nuevaTarea.appendChild(enlace);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea)

        tareaInput.value = "";

        for (let i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this)
            });
        }


    };

    var comprobarInput = function() {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrear una tarea")
    };

    var eliminarTarea = function() {
        this.parentNode.removeChild(this)
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