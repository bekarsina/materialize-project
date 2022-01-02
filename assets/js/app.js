document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, { edge: "right" });

  var tabs = document.querySelectorAll(".main-ul-navbar");
  M.Tabs.init(tabs, { swipeable: true });

  var actionButton = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(actionButton, { toolbarEnabled: true});
});
