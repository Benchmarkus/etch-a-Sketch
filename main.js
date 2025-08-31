// define container
const gridContainer = document.querySelector(".container");

// create grid event listener 
const buttonCreate = document.querySelector("#create-button");
buttonCreate.addEventListener("click", createGrid);

function createGrid() {
    let size = document.querySelector("#input-size").value;
    console.log("grid size logged as:"+size)

    if (size > 100) {
        alert("Valid size: 0 - 100");
        return;
    }

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

// grid box coloring
gridContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("box")) {
        e.target.classList.toggle("red")
    };
})
