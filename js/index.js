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

        checkFinished.type = "checkbox";
        listItemContent.type = "text";
        listItemContent.disabled = true;
        
        /* 修改、刪除按鈕建立文字 */
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
        console.log("新增Task被執行");

        /* 監聽區 */
        deleteBtn.addEventListener("click", deleteTask, false);
        checkFinished.addEventListener("change", checkTaskFinished, false);
        modifyBtn.addEventListener("click", modifyTask, false);

    }
}

function deleteTask() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
    console.log("刪除Task被執行");
}

function checkTaskFinished() {
    console.log("完成Task的checkbox被執行");
}
function modifyTask() {
    let listItem = this.parentNode;
    listItem.childNodes[1].disabled = false;
    console.log("修改Task被執行");
    listItem.childNodes[1].addEventListener("keydown", confirmModifyContent, false);
}

/*  */
function confirmModifyContent(e) {
    if (13 == e.keyCode) {
        let listItem = this.parentNode;
        listItem.childNodes[1].disabled = true;
        console.log("你按了Enter鍵");
    } else {
        console.log("你沒按Enter鍵");
    }
}

addListItemBtn.addEventListener("click", addNewTask, false);


