## 新增任務
新增任務切分小區塊分別是
1. 在DOM tree創建一個listItem
2. 將user輸入在input的value傳遞到顯示區的content
3. 清空input的value值，等待下一個task進來

首先
監聽按鈕是否被按下
```js
addListItemBtn.addEventListener("click", addNewTask, false);
```
被按下後執行function `addNewTask`

# 在DOM tree創建一個listItem
這邊使用`createElement()`來新增元素、`createTextNode()`來新增文字節點
並使用`appendChild()`來將html架構組裝完成

```js
let listItem = document.createElement("li"); //創建<li></li>
let deleteBtn = document.createElement("button"); //創建<button></button>
let deleteText = document.createTextNode("Delete"); //創建文字

deleteBtn.appendChild(deleteText); //將文字塞在按鈕內
listItem.appendChild(deleteBtn); //將按鈕塞在listItem內

console.log(listItem);
```

會得到

```html
<li>
    <button>Delete</button>
</li>
```

# 將user輸入在input的value傳遞到顯示區的content

```html
<div id="addListItem" class="add-list">
    <input class="input-text" type="text" placeholder="type something Todo...">
    <button class="add-list-btn">Add</button>
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
let addTask = document.getElementById('addListItem');
let inputContent = addTask.childNodes[1]; //index = 0，是#text的node
```

這裡只抓到tag就好，不要寫成這樣
```js 
let addTask = document.getElementById('addListItem');
let inputContent = addTask.childNodes[1].value;
```
不然只能抓靜態網頁的value值


```js
let listItemContent = document.createElement("input");
listItemContent.value = inputContent.value;
```
將user輸入的東西指派給listItem content(是個input tag)的value

# 清空input的value值，等待下一個task進來
```js
inputContent.value = "";
```

## 刪除任務

監聽刪除按鈕，找到該按鈕所在的listItem節點父層，刪除其子節點

```js
let listItem = this.parentNode; //按鈕的父層是listItem
let ul = listItem.parentNode; //listItem的父層是ul
ul.removeChild(listItem); //ul刪除掉含該按鈕的子元素

```

## 檢查任務是否完成

此處由於是畫線處理，所以使用CSS完成
JS部分僅監聽該按鈕並使用`consloe.log()`告知是否有抓到

## 修改任務
一開始使用`this.parentNode`來找到父層
接著指定`disabled`的布林值，使按鈕改變其狀態
```js
let listItem = this.parentNode;
listItem.childNodes[0].disabled = true;
listItem.childNodes[1].disabled = false;
listItem.childNodes[2].disabled = true;
listItem.childNodes[3].disabled = true;

listItem.childNodes[1].addEventListener("keydown", confirmModifyContent, false);
```
最後偵測鍵盤被按下

```js
function confirmModifyContent(e) {
    if (13 == e.keyCode) {
        let listItem = this.parentNode;
        listItem.childNodes[0].disabled = false;
        listItem.childNodes[1].disabled = true;
        listItem.childNodes[2].disabled = false;
        listItem.childNodes[3].disabled = false;
        console.log("你按了Enter鍵");
    } else {
        console.log("你沒按Enter鍵");
    }
}
```

如果被按下的是13(表示的是enter鍵)
就改變其disabled的布林值