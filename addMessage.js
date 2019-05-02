function addMessage(message) {
  $("#console").append("<br>" + message);
  setTimeout(() => {
    let consoleElem = document.getElementById("console");
    $('#console').animate({
      scrollTop: consoleElem.scrollHeight - consoleElem.clientHeight //No semicolon here!
    }, 500);
  }, 1)
}
