var args = $.args;

function doClick(e) {
  var winAbout = Alloy.createController('about');
  winAbout.getView().open();

}

$.win.open();
