// Datos del árbol genealógico (puedes agregar más personas)
const familyData = {
    name: "Juan Asprón",
    image: "https://via.placeholder.com/100",
    children: [
        {
            name: "María Asprón",
            image: "https://via.placeholder.com/100",
            children: [
                { name: "Carlos Asprón", image: "https://via.placeholder.com/100" },
                { name: "Ana Asprón", image: "https://via.placeholder.com/100" }
            ]
        },
        {
            name: "Pedro Asprón",
            image: "https://via.placeholder.com/100",
            children: [
                { name: "Luis Asprón", image: "https://via.placeholder.com/100" },
                { name: "Elena Asprón", image: "https://via.placeholder.com/100" }
            ]
        }
    ]
};

// Función para generar el árbol genealógico
function generateTree(data, container) {
    const node = document.createElement("div");
    node.classList.add("node");
    
    const img = document.createElement("img");
    img.src = data.image;
    
    const name = document.createElement("p");
    name.textContent = data.name;

    node.appendChild(img);
    node.appendChild(name);
    container.appendChild(node);

    if (data.children) {
        const childrenContainer = document.createElement("div");
        childrenContainer.style.display = "flex";
        childrenContainer.style.justifyContent = "center";
        
        data.children.forEach(child => {
            generateTree(child, childrenContainer);
        });

        container.appendChild(childrenContainer);
    }
}

// Insertar el árbol en la página
document.addEventListener("DOMContentLoaded", () => {
    const treeContainer = document.getElementById("tree");
    generateTree(familyData, treeContainer);
});
