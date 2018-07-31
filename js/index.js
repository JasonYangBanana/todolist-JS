/* 宣告變數區 */
//新增區
let addListItem = document.getElementById('addListItem');
let inputContent = addListItem.childNodes[1];
let addListItemBtn = addListItem.childNodes[3];
//顯示區
let showList = document.getElementById('showList');

/* 宣告函式區 */
function addNewTask() {
    if (inputContent.value === "") {
        alert("你還沒輸入task")
    } else {
        //製作新的listItem
        let listItem = document.createElement("li");
        let checkFinished = document.createElement("input");
        let listItemContent = document.createElement("input");
        let modifyBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");
        let modifyText = document.createTextNode("Modify");
        let deleteText = document.createTextNode("Delete");

        // i++;
        // list.classList.add("Task" + i);
        checkFinished.type = "checkbox";
        listItemContent.type = "text";
        
        modifyBtn.appendChild(modifyText);
        deleteBtn.appendChild(deleteText);
        listItem.appendChild(checkFinished);
        listItem.appendChild(listItemContent);
        listItem.appendChild(modifyBtn);
        listItem.appendChild(deleteBtn);
        showList.appendChild(listItem);

        /* 將新增區的input值導入顯示區 */
        listItemContent.value = inputContent.value;

        /* 清空input的value */
        inputContent.value = "";
        deleteBtn.addEventListener("click", deleteTask, false);
    }
}

function deleteTask() { 
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}
addListItemBtn.addEventListener("click", addNewTask, false);


