$(function () {

  function todoListItem( inputClass, spanClass, listItem) {
    return '<li><input class=' + inputClass + ' type="checkbox"><span class=' + spanClass + '>'
              + listItem + '</span><button id="delete" class="button">Delete</button></li>'
  }

  function addToTodoList(event) {
    event.stopPropagation();
    addItem = $('#add-item').val();
    if (addItem != "") {
      $('.todo-list ol').append(todoListItem("done", "todo-item", addItem));
      $('#add-item').val('');
      addItem = "";
    }
  }

  function deleteFromList(event) {
    event.stopPropagation();
    $(event.target).parent().fadeOut(2000, function() {
      $(event.target).parent().detach();
    });
  }

  function moveToCompletedList(event) {
    event.stopPropagation();
    completedTask = $(event.target).next().text();
    $(event.target).parent().fadeOut(2000, function() {
      $(event.target).parent().detach();
    });
    $('.completed-list ol').append(todoListItem("redo", "completed-item", completedTask));
  }

  function moveToTodoList(event) {
    event.stopPropagation();
    redoTask = $(event.target).next().text();
    $('.todo-list ol').append(todoListItem("done", "todo-item", redoTask));
    $(event.target).parent().fadeOut(2000, function() {
      $(event.target).parent().detach();
    });
  }

  $('.add-list').on('click', 'li #add', addToTodoList);
  $('.todo-list').on('click', 'li .done', moveToCompletedList);
  $('.todo-list').on('click', 'li #delete', deleteFromList);
  $('.completed-list').on('click', 'li .redo', moveToTodoList);
  $('.completed-list').on('click', 'li #delete', deleteFromList);
});
