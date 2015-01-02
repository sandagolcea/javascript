// alert("Got to tic tac toe!");
window.onload = function() {
  // alert("Got to tic tac toe!");
  var board =  document.getElementById("board");
  // alert(board);
  var cells = board.getElementsByTagName("td");
  // alert(cells);
  
  for (var i = cells.length - 1; i >= 0; i--) {
    cells[i].onclick = function() {
      alert("You have clicked. we are happy. click again!");
    }
  }
};
