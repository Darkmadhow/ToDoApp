//Level2: Save to LocalStorage, use OOPs
var toDoList = ["Einkaufen","Sport machen","Cookbook verschönern"];

function addToDo(event){
    //TODO! Code here
}

function markToDo(event){
    document.getElementById(event.currentTarget.id).classList.toggle("marked");
}

function editToDo(event){
    //TODO! Code here
}

function deleteToDo(event){
    //TODO! Code here
}

function renderList() {
    let list = document.querySelector(".todoList");
    toDoList.forEach((item,index) => {
        let renderItem = document.createElement("li");
        renderItem.classList.add("todoItem");
        renderItem.id = index;
        let itemText = document.createElement("span");
        itemText.innerHTML = item;
        renderItem.appendChild(itemText);
        renderItem.appendChild(createDropdown());
        renderItem.addEventListener("click",markToDo);

        list.appendChild(renderItem);
    });
}

function createDropdown() {
    let dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    let dropBtn = document.createElement("button");
    dropBtn.classList.add("btn", "btn-primary", "dropdown-toggle");
    dropBtn.type = "button";
    dropBtn.setAttribute("data-bs-toggle","dropdown");
    dropBtn.setAttribute("aria-expanded","false");
    dropBtn.innerHTML = "•••";
    dropdown.appendChild(dropBtn);

    let dropdownMenu = document.createElement("ul");
    dropdownMenu.classList.add("dropdown-menu");

    let optionEdit = document.createElement("li");
    let editAnchor = document.createElement("a");
    editAnchor.classList.add("dropdown-item");
    editAnchor.href = "#";
    editAnchor.innerHTML = "ToDo ändern";
    editAnchor.addEventListener("click",editToDo);
    optionEdit.appendChild(editAnchor);
    dropdownMenu.appendChild(optionEdit);

    let optionDelete = document.createElement("li");
    let deleteAnchor = document.createElement("a");
    deleteAnchor.classList.add("dropdown-item");
    deleteAnchor.href = "#";
    deleteAnchor.innerHTML = "ToDo löschen";
    deleteAnchor.addEventListener("click", deleteToDo);
    optionDelete.appendChild(deleteAnchor);
    dropdownMenu.appendChild(optionDelete);

    dropdown.appendChild(dropdownMenu);

    return dropdown;
}

renderList();