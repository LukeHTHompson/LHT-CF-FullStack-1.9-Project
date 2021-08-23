// IIFE setup for jQuery functionality
function newItem(){

  //1. Adding a new item to the list of items:
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  //2. Crossing out an item from the list of items:
  function crossOut() {
    // adds or removes the strike class which has CSS to strikethrough text
    li.toggleClass("strike");
  }

  // on double click of an li element, run crossOut to toggle the strikethrough CSS
  // good to know dblclick is a valid event
  li.on("dblclick",crossOut);

  //3(i). Adding the delete button "X":
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  // when you click the X add a class which hides the element
  crossOutButton.on("click", deleteListItem);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem(){
    li.addClass("delete")
  }

  // 4. Reordering the items:
  $('#list').sortable();

}
