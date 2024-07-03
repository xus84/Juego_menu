const elaboracionesData = {
    platosCombinados: [
        { nombre: "Nº 1", ingredientes: ["Chuletas de cordero lechal", "patatas fritas", "huevo frito"] },
        { nombre: "Nº 2", ingredientes: ["Solomillo de ternera", "patatas fritas"] },
        { nombre: "Nº 3", ingredientes: ["Bacalao rebozado", "berenjenas", "pisto"] },
        { nombre: "Nº 4", ingredientes: ["Pechuga de pollo a la plancha", "lechuga", "tomate", "zanahoria"] },
        { nombre: "Nº 5", ingredientes: ["Ternera a la plancha", "alcachofas", "berenjenas"] },
        { nombre: "Nº 6", ingredientes: ["Sepionet a la plancha", "patatas fritas"] },
        { nombre: "Nº 7", ingredientes: ["Croquetas de bacalao", "huevo frito", "pisto", "patatas fritas"] },
        { nombre: "Nº 8", ingredientes: ["Merluza a la plancha", "tomate", "lechuga", "zanahoria"] },
        { nombre: "Nº 9", ingredientes: ["Lomo a la plancha", "huevo frito", "pisto", "patatas fritas"] },
        { nombre: "Nº 10", ingredientes: ["Emperador a la plancha", "ensaladilla rusa", "espárragos blancos"] },
        { nombre: "Nº 11", ingredientes: ["Pinchos morunos", "huevo frito", "patatas fritas"] },
        { nombre: "Nº 12", ingredientes: ["Calamares romana", "alcachofas", "patatas fritas"] },
        { nombre: "Nº 13", ingredientes: ["Albóndigas de carne", "patatas fritas"] },
        { nombre: "Nº 14", ingredientes: ["Entrecotte", "patatas fritas"] }
    ],
    bocados: [
        { nombre: "ALMUSAFES", ingredientes: ["Sobrasada", "queso", "cebolla"] },
        { nombre: "DON JUAN", ingredientes: ["Berenjenas rebozadas", "jamón"] },
        { nombre: "ALBAÑIL", ingredientes: ["Blanco y negro", "patatas", "all i oli"] },
        { nombre: "CHIVITO", ingredientes: ["Lomo", "queso", "bacon", "lechuga", "mahonesa"] },
        { nombre: "BRASCADA", ingredientes: ["Ternera", "Jamón plancha", "cebolla"] },
        { nombre: "PUTI", ingredientes: ["Bacon", "queso", "huevo frito", "patatas fritas"] },
        { nombre: "SI SI CLARO", ingredientes: ["Pincho", "queso", "bravas"] },
        { nombre: "CAMPERO", ingredientes: ["Panceta", "pimiento verde", "patatas", "all i oli"] },
        { nombre: "SERRANITO", ingredientes: ["Jamón plancha", "pimientos", "huevo frito"] },
        { nombre: "DORIN", ingredientes: ["Ternera", "queso roquefort", "cebolla"] },
        { nombre: "VALENCIANO", ingredientes: ["Lomo", "tortilla francesa", "tomate rayado"] },
        { nombre: "CABRITO", ingredientes: ["Ternera", "queso de cabra", "tomate plancha"] },
        { nombre: "CARNE DE POTRO", ingredientes: ["Potro", "ajos tiernos", "patatas"] },
        { nombre: "KING JOE", ingredientes: ["Pulled pork", "patatas a lo pobre", "all i oli o salsa roquefort"] },
        { nombre: "NOU MOLES", ingredientes: ["Lomo adobado", "pimiento verde", "huevo frito", "patatas a lo pobre", "all i oli"] },
        { nombre: "CARRILLERA", ingredientes: ["Carrillera", "patatas a lo pobre", "all i oli o salsa roquefort"] }
    ],
    sartenes: [
        {
            nombre: "Sarten de lomo",
            ingredientes: ["Patatas a lo pobre", "Huevo frito", "Lomo", "Pimientos"]
        },
        {
            nombre: "Sarten de Jamon",
            ingredientes: ["Patatas a lo pobre", "Huevo frito", "Jamón serrano"]
        },
        {
            nombre: "Sarten de embutido",
            ingredientes: ["Patatas a lo pobre", "Huevo frito", "Longaniza", "Chorizo", "Morcilla"]
        },
        {
            nombre: "Sarten de gambas",
            ingredientes: ["Patatas a lo pobre", "Huevo frito", "Gambas", "Gulas"]
        }
    ],
    ensaladas: [
        {
            nombre: "VALENCIANA",
            ingredientes: ["Lechuga", "tomate", "huevo duro", "cebolla", "atún", "aceitunas"]
        },
        {
            nombre: "CABRA",
            ingredientes: ["Mix de lechugas", "medallones queso cabra", "bacon", "cebolla caramelizada", "salsa mostaza y miel"]
        },
        {
            nombre: "CÉSAR",
            ingredientes: ["Lechuga", "pollo", "picatostes", "parmesano", "salsa César"]
        }
    ],
    sandwiches: [
        {
            nombre: "MIXTO",
            ingredientes: ["Jamón york", "queso"]
        },
        {
            nombre: "SOBRASADA",
            ingredientes: ["Sobrasada", "queso"]
        },
        {
            nombre: "VEGETAL",
            ingredientes: ["Lechuga", "tomate", "huevo duro", "atún", "espárrago", "mahonesa"]
        },
        {
            nombre: "CLUB",
            ingredientes: ["Francesa", "bacon", "queso", "mahonesa", "tomate", "mézclum", "pechuga"]
        }

    ],
    hamburguesas: [
        {
            nombre: "COMPLETA",
            ingredientes: ["Carne de ternera", "Lechuga", "Tomate", "Cebolla morada", "Bacon", "Queso", "Mahonesa"]
        },
        {
            nombre: "ESPECIAL",
            ingredientes: ["Carne Angus", "Mezclum", "Bacon", "Salsa de queso Cheddar", "Cebolla caramelizada", "Tomate"]
        },
        {
            nombre: "PULLED",
            ingredientes: ["Carne desmigada", "Cebolla caramelizada", "Bacon", "Mezclum", "Tomate", "Salsa de roquefort", "Salsa de cheddar"]
        }
    ]
};

let selectedElaboracion = null;
let selectedIngredients = [];

document.getElementById('menu').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const section = event.target.dataset.section;
        loadElaboraciones(section);
    }
});

function loadElaboraciones(section) {
    const elaboracionesContainer = document.getElementById('elaboraciones');
    const ingredientesContainer = document.getElementById('ingredientes');
    elaboracionesContainer.innerHTML = '';
    ingredientesContainer.innerHTML = '';
    selectedElaboracion = null;
    selectedIngredients = [];

    elaboracionesData[section].forEach(elaboracion => {
        const elaboracionElement = document.createElement('div');
        elaboracionElement.textContent = elaboracion.nombre;
        elaboracionElement.classList.add('elaboracion');
        elaboracionElement.addEventListener('click', () => selectElaboracion(elaboracion, section));
        elaboracionesContainer.appendChild(elaboracionElement);
    });
}

function selectElaboracion(elaboracion, section) {
    selectedElaboracion = elaboracion;
    const elaboracionesContainer = document.getElementById('elaboraciones');
    const ingredientesContainer = document.getElementById('ingredientes');
    elaboracionesContainer.innerHTML = '';
    const elaboracionElement = document.createElement('div');
    elaboracionElement.textContent = elaboracion.nombre;
    elaboracionesContainer.appendChild(elaboracionElement);

    ingredientesContainer.innerHTML = '';
    let uniqueIngredients = [];
    elaboracionesData[section].forEach(item => {
        item.ingredientes.forEach(ingrediente => {
            if (!uniqueIngredients.includes(ingrediente)) {
                uniqueIngredients.push(ingrediente);
            }
        });
    });

    uniqueIngredients.forEach(ingrediente => {
        const ingredienteElement = document.createElement('div');
        ingredienteElement.textContent = ingrediente;
        ingredienteElement.classList.add('ingrediente');
        ingredienteElement.addEventListener('click', () => selectIngrediente(ingredienteElement, ingrediente));
        ingredientesContainer.appendChild(ingredienteElement);
    });

    document.getElementById('enviarIntento').style.display = 'block';
}

function selectIngrediente(element, ingrediente) {
    if (!selectedIngredients.includes(ingrediente)) {
        selectedIngredients.push(ingrediente);
        element.classList.add('selected');
    } else {
        selectedIngredients = selectedIngredients.filter(ing => ing !== ingrediente);
        element.classList.remove('selected');
    }
}

document.getElementById('enviarIntento').addEventListener('click', () => {
    if (selectedElaboracion.ingredientes.length === selectedIngredients.length &&
        selectedElaboracion.ingredientes.every(ing => selectedIngredients.includes(ing))) {
        document.getElementById('mensaje').textContent = '¡Correcto! Has acertado.';
    } else {
        document.getElementById('mensaje').textContent = 'Inténtalo de nuevo.';
    }
    selectedIngredients = [];
    document.querySelectorAll('.ingrediente').forEach(element => {
        element.classList.remove('selected');
    });
});
