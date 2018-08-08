## 新增任務
新增任務切分小區塊分別是
1. 在DOM tree創建一個task
2. 將user輸入在input的value傳遞到顯示區的content
3. 清空input的value值，等待下一個task進來

首先
監聽按鈕是否被按下
```js
addtaskBtn.addEventListener("click", addNewTask, false);
```
被按下後執行function `addNewTask`

# 在DOM tree創建一個task
這邊使用`createElement()`來新增元素、`createTextNode()`來新增文字節點
並使用`appendChild()`來將html架構組裝完成

```js
let task = document.createElement("li"); //創建<li></li>
let deleteBtn = document.createElement("button"); //創建<button></button>
let deleteText = document.createTextNode("Delete"); //創建文字

deleteBtn.appendChild(deleteText); //將文字塞在按鈕內
task.appendChild(deleteBtn); //將按鈕塞在task內

console.log(task);
```

會得到

```html
<li>
    <button>Delete</button>
</li>
```

# 將user輸入在input的value傳遞到顯示區的content

```html
<div id="addtask" class="add-task">
    <input class="input-text" type="text" placeholder="type something Todo...">
    <button>Add</button>
</div>
    ：
    ：
    ：
<li>
    <input type="checkbox">
    <input type="text" disabled>  <!--要將value值傳入這個input-->
    <button>Modify</button>
    <button>Delete</button>
</li>

```

```js 
let addTask = document.getElementById('addtask');
let userInput = addTask.childNodes[1]; //index = 0，是#text的node
```

這裡只抓到tag就好，不要寫成這樣
```js 
let addTask = document.getElementById('addtask');
let userInput = addTask.childNodes[1].value;
```
不然只能抓靜態網頁的value值


```js
let inputContent = document.createElement("input");
inputContent.value = userInput.value;
```
將user輸入的東西指派給task content(是個input tag)的value

# 清空input的value值，等待下一個task進來
```js
userInput.value = "";
```

## 刪除任務

監聽刪除按鈕，找到該按鈕所在的task節點父層，刪除其子節點

```js
let task = this.parentNode; //按鈕的父層是task
let ul = task.parentNode; //task的父層是ul
ul.removeChild(task); //ul刪除掉含該按鈕的子元素

```

## 檢查任務是否完成
使用`switch`來確認當前分頁
修改task的`display`
```js
function checkTaskFinished() {
    let task = this.parentNode;
    switch (true) {
        case ongoingTask.classList.contains("active"):
            task.style = "display: none;";
            break;
        case doneTask.classList.contains("active"):
            task.style = "display: none;";
            break;
        default:
    }
}
```

## 修改任務
一開始使用`this.parentNode`來找到父層
接著指定`disabled`的布林值，使按鈕改變其狀態
```js
let task = this.parentNode;
task.childNodes[0].disabled = true;
task.childNodes[1].disabled = false;
task.childNodes[2].disabled = true;
task.childNodes[3].disabled = true;

task.childNodes[1].addEventListener("keydown", confirmModifyContent, false);
```
最後偵測鍵盤被按下

```js
function confirmModifyContent(e) {
    if (13 == e.keyCode) {
        let task = this.parentNode;
        task.childNodes[0].disabled = false;
        task.childNodes[1].disabled = true;
        task.childNodes[2].disabled = false;
        task.childNodes[3].disabled = false;
        console.log("你按了Enter鍵");
    } else {
        console.log("你沒按Enter鍵");
    }
}
```

如果被按下的是13(表示的是enter鍵)
就改變其disabled的布林值

## filter
使用`element.classList.add()`、`element.classList.remove()`來新增\移除className，呈現切換分頁的效果
同時檢查checkbox部分是否被打勾，修改task的display屬性

```js
function showOngoingTask() {
    ongoingTask.classList.add("active");
    doneTask.classList.remove("active");
    allTask.classList.remove("active");

    let finishedCheckbox = document.querySelectorAll('input[type=checkbox]');
    for (let taskNum = 0; taskNum < finishedCheckbox.length; taskNum++){
        let task = finishedCheckbox[taskNum].parentNode;
        if (finishedCheckbox[taskNum].checked) {
            task.style = "display: none;";
        } else {
            task.style = "display: flex;";
        }
    }
}
```