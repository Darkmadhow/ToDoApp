//Level2: Save to LocalStorage, use OOPs
var toDoList = []//["Einkaufen","Sport machen","Cookbook verschönern"];
const editModal = document.getElementById('editModal');
const editBtn = document.getElementById("saveEdit");
const editInput = document.getElementById("todo-new");
const addInput = document.getElementById("addInput");
const addBtn = document.querySelector(".addBtn");

function addToDo(event){
    let newToDo = addInput.value;
    if(newToDo){
        toDoList.push(newToDo);
        renderList();
        addInput.value = "";
    } 
}

function markToDo(event){
    event.currentTarget.classList.toggle("marked");
}

function editToDo(event){
    let editedToDo = event.currentTarget.getAttribute("editing");
    let index = toDoList.indexOf(editedToDo);
    toDoList[index] = editInput.value;
    renderList();
}

function deleteToDo(event){
    let deletingToDo = event.currentTarget.parentElement.parentElement.parentElement.parentElement.firstChild.innerHTML;
    let index = toDoList.indexOf(deletingToDo);
    toDoList.splice(index,1);
    renderList();
}

function renderList() {
    let list = document.querySelector(".todoList");
    list.innerHTML = "";
    toDoList.forEach((item,index) => {
        let renderItem = document.createElement("li");
        renderItem.classList.add("todoItem");
        renderItem.id = index;
        let itemText = document.createElement("span");
        itemText.innerHTML = item;
        itemText.addEventListener("click",markToDo);
        renderItem.appendChild(itemText);
        renderItem.appendChild(createDropdown(item));

        list.appendChild(renderItem);
    });
}

function createDropdown(item) {
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
    editAnchor.href = "#editModal";
    editAnchor.setAttribute("data-bs-toggle","modal");
    editAnchor.setAttribute("data-bs-todo",item)
    editAnchor.innerHTML = "ToDo ändern";
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


editModal.addEventListener('show.bs.modal', event => {
    // Link that triggered the modal
    const triggerLink = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const todoContent = triggerLink.getAttribute('data-bs-todo');
    //Save the editing ToDo in the Save button
    editBtn.setAttribute("editing",todoContent);
    // Update the modal's content.
    const modalBodyInput = editModal.querySelector('.modal-body input');
    modalBodyInput.value = "";
    modalBodyInput.placeholder = todoContent;
  });


editBtn.addEventListener("click",editToDo);
addBtn.addEventListener("click",addToDo);
renderList();