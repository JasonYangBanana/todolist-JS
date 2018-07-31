/* 宣告變數區 */
//新增區
let addList = document.getElementById('addList');
let inputText = addList.childNodes[1];
let addListBtn = addList.childNodes[3];
//顯示區
let todoList = document.getElementById('todoList');

// let deleteBtn = document.querySelector(".delete-btn");

// let checkFinish = todoList.childNodes[1].childNodes[1];
// let listContent = todoList.childNodes[1].childNodes[3];
// let modifyContent = todoList.childNodes[1].childNodes[5];


/* 宣告函式區 */
function addTask() {
    addNewList();
    // cloneInputText();
}

// let i = 0;
function addNewList() {
    if (inputText.value === "") {
        alert("你還沒輸入task")
    } else {
        //製作新的list
        let listitem = document.createElement("li");
        let checkFinish = document.createElement("input");
        let listItemContent = document.createElement("input");
        let modifyBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");
        let modifyText = document.createTextNode("Modify");
        let deleteText = document.createTextNode("Delete");

        // i++;
        // list.classList.add("Task" + i);
        checkFinish.type = "checkbox";
        listItemContent.type = "text";
        
        deleteBtn.className = "delete-btn";
        
        modifyBtn.appendChild(modifyText);
        deleteBtn.appendChild(deleteText);
        listitem.appendChild(checkFinish);
        listitem.appendChild(listItemContent);
        listitem.appendChild(modifyBtn);
        listitem.appendChild(deleteBtn);
        todoList.appendChild(listitem);

        /* 將新增區的input值導入顯示區 */
        listItemContent.value = inputText.value;

        /* 清空input的value */
        inputText.value = "";
        deleteBtn.addEventListener("click", deleteTask, false);
    }
}

function deleteTask() { 
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}
addListBtn.addEventListener("click", addTask, false);


