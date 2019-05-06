function addMessage(message, badgeType) {

  var bt = badgeType == null ? "info" : badgeType;
  

  var icon = "<div class=\"mt-1 ml-1\" style=\"font-size: small\"><span class=\"badge badge-" + bt + "\"><i style=\"font-size: small\" class=\"material-icons\">error</i></span> <span>" + message + "</span></div>";

  $("#console").append("<br>" + icon);
  setTimeout(() => {
    let consoleElem = document.getElementById("console");
    $('#console').animate({
      scrollTop: consoleElem.scrollHeight - consoleElem.clientHeight //No semicolon here!
    }, 500);
  }, 1);
}
