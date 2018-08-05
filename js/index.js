/* 宣告變數區 */
//視覺-輸入區
let addTask = document.getElementById('addListItem');
let inputContent = addTask.childNodes[1];
let addListItemBtn = addTask.childNodes[3];
//filter
let ongoingTask = document.getElementById('ongoingTask');
let doneTask = document.getElementById('doneTask');
let allTask = document.getElementById('allTask');
//視覺-顯示區
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

        checkFinished.type = "checkbox";
        listItemContent.type = "text";
        listItemContent.disabled = true;
        
        /* 修改、刪除按鈕，插入文字 */
        modifyBtn.appendChild(modifyText);
        deleteBtn.appendChild(deleteText);

        listItem.appendChild(checkFinished);
        listItem.appendChild(listItemContent);
        listItem.appendChild(modifyBtn);
        listItem.appendChild(deleteBtn);
        showList.appendChild(listItem);

        /* 將user的input值導入顯示區的內文 */
        listItemContent.value = inputContent.value;

        /* 清空user輸入區input的value */
        inputContent.value = "";

        console.log("新增Task被執行");

        /* 監聽listItem上的互動 */
        deleteBtn.addEventListener("click", deleteTask, false);
        checkFinished.addEventListener("change", checkTaskFinished, false);
        modifyBtn.addEventListener("click", modifyTask, false);

        /* filter */
        ongoingTask.addEventListener("click", showOngoingTask, false);
        doneTask.addEventListener("click", showDoneTask, false);
        allTask.addEventListener("click", showAllTask, false);
    }
}

function addNewTaskByEnter(e) {
    if (13 == e.keyCode) {
        addNewTask();
    }
}

function deleteTask() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
    console.log("刪除Task被執行");
}

function checkTaskFinished() {
    console.log("是否完成Task的checkbox被執行");
}

function modifyTask() {
    let listItem = this.parentNode;
    listItem.childNodes[0].disabled = true;
    listItem.childNodes[1].disabled = false;
    listItem.childNodes[2].disabled = true;
    listItem.childNodes[3].disabled = true;
    console.log("修改Task被執行");
    listItem.childNodes[1].addEventListener("keydown", confirmModifyContent, false);
}

function confirmModifyContent(e) {
    if (13 == e.keyCode) {
        let listItem = this.parentNode;
        if (listItem.childNodes[1].value === "") {
            var del = confirm("你確定要刪除Task？");
            if (del === true){
            let ul = listItem.parentNode;
            ul.removeChild(listItem);    
            console.log("你按了Enter鍵，因沒有內文，刪除了Task");
            }
        } else { 
            listItem.childNodes[0].disabled = false;
            listItem.childNodes[1].disabled = true;
            listItem.childNodes[2].disabled = false;
            listItem.childNodes[3].disabled = false;
            console.log("你按了Enter鍵，修改了Task");
        }
    } else {
        console.log("你沒按Enter鍵");
    }
}

function showOngoingTask() {
    /* let finishedCheckbox = document.querySelector('input[type=checkbox]'); */
    if (finishedCheckbox.checked = true) {
        console.log("checked");
    } else {
        console.log("nochecked");
    }
    console.log("show ongoing task");
}

function showDoneTask() {
    console.log("show done task");
}

function showAllTask() {
    console.log("show all task");
}

addListItemBtn.addEventListener("click", addNewTask, false);
inputContent.addEventListener("keydown", addNewTaskByEnter, false);



