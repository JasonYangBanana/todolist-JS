/* 宣告變數區 */
//視覺-輸入區
let addTask = document.getElementById('addTask');
let inputContent = addTask.childNodes[1];
let addtaskBtn = addTask.childNodes[3];
//filter
let ongoingTask = document.getElementById('ongoingTask');
let doneTask = document.getElementById('doneTask');
let allTask = document.getElementById('allTask');
//視覺-顯示區
let showTask = document.getElementById('showTask');

/* 宣告函式區 */
function addNewTask() {
    if (doneTask.classList.contains("active")) {
        alert("請切換到ongoing或all分頁，才能新增task");
        return;
    } else if (inputContent.value === "") {
        alert("你還沒輸入task")
        return;
    } 
    //製作新的task
    let task = document.createElement("li");

    let checkFinished = document.createElement("input");
    let userInput = document.createElement("input");
    let modifyBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    let modifyText = document.createTextNode("Modify");
    let deleteText = document.createTextNode("Delete");

    checkFinished.type = "checkbox";
    userInput.type = "text";
    userInput.disabled = true;
    
    /* 修改、刪除按鈕，插入文字 */
    modifyBtn.appendChild(modifyText);
    deleteBtn.appendChild(deleteText);

    task.appendChild(checkFinished);
    task.appendChild(userInput);
    task.appendChild(modifyBtn);
    task.appendChild(deleteBtn);
    showTask.appendChild(task);

    /* 將user的input值導入顯示區的內文 */
    userInput.value = inputContent.value;

    /* 清空user輸入區input的value */
    inputContent.value = "";
    console.log("新增Task被執行");
    /* 監聽task上的互動 */
    deleteBtn.addEventListener("click", deleteTask, false);
    checkFinished.addEventListener("change", checkTaskFinished, false);
    modifyBtn.addEventListener("click", modifyTask, false);
}

function addNewTaskByEnter(e) {
    if (13 == e.keyCode) {
        if (doneTask.classList.contains("active")) {
            alert("請切換到ongoing或all分頁，才能新增task");
            return;
        }
        addNewTask();
    }
}

function deleteTask() {
    let task = this.parentNode;
    let ul = task.parentNode;
    ul.removeChild(task);
    console.log("刪除Task被執行");
}

function checkTaskFinished() {
    switch (true) {
        case ongoingTask.classList.contains("active"):
            
            console.log("ongoing");
            break;
        case doneTask.classList.contains("active"):
            console.log("done");
            break;
        case allTask.classList.contains("active"):
            console.log("all");
            break;
        default:
            console.log("default");
    }
    console.log("是否完成Task的checkbox被點擊");
}

function showOngoingTask() {
    ongoingTask.classList.add("active");
    doneTask.classList.remove("active");
    allTask.classList.remove("active");

    let finishedCheckbox = document.querySelectorAll('input[type=checkbox]');
    for (let taskNum = 0; taskNum < finishedCheckbox.length; taskNum++){
        let task = finishedCheckbox[taskNum].parentNode;
        if (finishedCheckbox[taskNum].checked) {
            task.style = "display: none";
        } else {
            task.style = "display: flex";
        }
    }
    console.log("顯示ongoing task");
}

function showDoneTask() {
    ongoingTask.classList.remove("active");
    doneTask.classList.add("active");
    allTask.classList.remove("active");

    let finishedCheckbox = document.querySelectorAll('input[type=checkbox]');
    for (let taskNum = 0; taskNum < finishedCheckbox.length; taskNum++) {
        let task = finishedCheckbox[taskNum].parentNode;
        if (finishedCheckbox[taskNum].checked) {
            task.style = "display: flex";
        } else {
            task.style = "display: none";
        }
    }
    console.log("顯示done task");
}

function showAllTask() {
    ongoingTask.classList.remove("active");
    doneTask.classList.remove("active");
    allTask.classList.add("active");
    
    let finishedCheckbox = document.querySelectorAll('input[type=checkbox]');
    for (let taskNum = 0; taskNum < finishedCheckbox.length; taskNum++) {
        let task = finishedCheckbox[taskNum].parentNode;
        if (finishedCheckbox[taskNum].checked) {
            task.style = "display: flex";
        } else {
            task.style = "display: flex";
        }
    }
    console.log("顯示all task");
}

function modifyTask() {
    let task = this.parentNode;
    task.childNodes[0].disabled = true;
    task.childNodes[1].disabled = false;
    task.childNodes[2].disabled = true;
    task.childNodes[3].disabled = true;
    console.log("修改Task被執行");
    task.childNodes[1].addEventListener("keydown", confirmModifyContent, false);
}

function confirmModifyContent(e) {
    if (13 == e.keyCode) {
        let task = this.parentNode;
        if (task.childNodes[1].value === "") {
            var del = confirm("你確定要刪除Task？");
            if (del === true){
            let ul = task.parentNode;
            ul.removeChild(task);    
            console.log("你按了Enter鍵，因沒有內文，刪除了Task");
            }
        } else { 
            task.childNodes[0].disabled = false;
            task.childNodes[1].disabled = true;
            task.childNodes[2].disabled = false;
            task.childNodes[3].disabled = false;
            console.log("你按了Enter鍵，修改了Task");
        }
    } else {
        console.log("你沒按Enter鍵");
    }
}

addtaskBtn.addEventListener("click", addNewTask, false);
inputContent.addEventListener("keydown", addNewTaskByEnter, false);
ongoingTask.addEventListener("click", showOngoingTask, false);
doneTask.addEventListener("click", showDoneTask, false);
allTask.addEventListener("click", showAllTask, false);