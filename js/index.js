/* 宣告變數區 */

//新增區
let addList = document.getElementById('addList');
let inputText = addList.childNodes[1];
let addListBtn = addList.childNodes[3];
//顯示區
let todoList = document.getElementById('todoList');
// let checkFinish = todoList.childNodes[1].childNodes[1];
// let listContent = todoList.childNodes[1].childNodes[3];
// let modifyContent = todoList.childNodes[1].childNodes[5];
// let deleteList = todoList.childNodes[1].childNodes[7];

/* 宣告函式區 */
function addTask() {
    addNewList();
    // cloneInputText();
}

function addNewList() {
    //製作新的list
    let list = document.createElement("li");
    let checkFinish = document.createElement("input");
    let listContent = document.createElement("input");
    let modifyBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    let modifyText = document.createTextNode("Modify");
    let deleteText = document.createTextNode("Delete");

    checkFinish.type = "checkbox";
    listContent.type = "text";

    modifyBtn.appendChild(modifyText);
    deleteBtn.appendChild(deleteText);
    list.appendChild(checkFinish);
    list.appendChild(listContent);
    list.appendChild(modifyBtn);
    list.appendChild(deleteBtn);
    todoList.appendChild(list);

    /* 將新增區的值導入顯示區 */
    listContent.value = inputText.value;

}

// function cloneInputText() {

// }


addListBtn.addEventListener("click", addTask, false);

