
const gridContainer = document.querySelector(".container");

const buttonCreate = document.querySelector("#create-button");
buttonCreate.addEventListener("click", createGrid);


function createGrid() {
    let size = document.querySelector("#input-size").value;
    console.log("grid size logged as:"+size)

    // clear container
    gridContainer.innerHTML = "";

    // calculate box width and height length
    let boxSideLength = 1000/size;

    // create and append boxes to container
    for (let i=0; i<size*size; i++) {
        let box = document.createElement("div");
        box.style.width = `${boxSideLength}px`;
        box.style.height = `${boxSideLength}px`;
        box.classList.add("box");
        gridContainer.appendChild(box);
    };

};

