(function () {
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  document.addEventListener('keydown', function (event) {
    var key = event.key.toLowerCase();

    if ((event.ctrlKey || event.metaKey) && key === 's') {
      event.preventDefault();
    }
  });
})();
