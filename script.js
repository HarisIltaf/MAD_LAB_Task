const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  //This function creates a new list element
  function newTodo() {
    var clicks = document.getElementsByTagName("input").length;
    var item = prompt("Please enter a goal", " ")
    if(item == null){
      return cheese
    }
    clicks ++;
    itemCountSpan.innerHTML = clicks;
    list.innerHTML = list.innerHTML + "<li id = 'clicks'> <input type = checkbox onclick = 'checker()' class = 'todo-checkbox'>Goal: " + item +
    "</input>" + "<button class = 'todo-delete' value = clicks onclick = 'deleteToDo(this.value)'>Delete</button></li>"
  
  }
  //This function sets the unchecked count
 /* function checker(){
      var Total = 0;
      for (var i = 0; i < document.getElementsByTagName("input").length; i++){
        if (!document.getElementsByTagName("input")[i].checked){
          Total ++;
          uncheckedCountSpan.innerHTML = Total;
        }
    }
  }*/
  //This function deletes a list element selected
  function deleteToDo(sel_id){
  
    list.removeChild(document.getElementsByTagName("li")[sel_id]);
    var clicks = document.getElementsByTagName("input").length;
    itemCountSpan.innerHTML = clicks;
  
  }
  // decrease unchecked todos count if certain element is checked
function countCheckedTodo(element) {
  let count = Number(element.innerHTML)
  count--
  element.innerHTML = count.toString()
}