function addMessage(message, icon, badgeType) {

  var _badgeType = badgeType == null ? "info" : badgeType;
  var _icon = icon == null ? "help-circle-outline" : icon;

  var msgHtml = "<div class=\"mt-1 ml-1\"><span class=\"badge badge-" + _badgeType + "\"><ion-icon name=" + _icon + "></ion-icon></span> <span>" + message + "</span></div>";

  $("#console").append(msgHtml);
  setTimeout(() => {
    let consoleElem = document.getElementById("console");
    $('#console').animate({
      scrollTop: consoleElem.scrollHeight - consoleElem.clientHeight //No semicolon here!
    }, 500);
  }, 1);
}
