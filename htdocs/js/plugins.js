// Plugins
// jQuery plugins and other 3rd party scripts
// -----------------------------------------------------------------------------
// HTML5 Boilerplate
// https://github.com/h5bp/html5-boilerplate

// Console
// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while(length--) {
    method = methods[length];

    // Only stub undefined methods.
    if(!console[method]) {
      console[method] = noop;
    }
  }
}());
// -----------------------------------------------------------------------------
// Wasabi
// A collection of useful jQuery Utilities
// https://github.com/ahomiya/wasabi

// Exists
// Check if element exists
$.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);

  if(this.length) {
    callback.call(this, args);
  }
  return this;
};


// Has attribute
// Determine whether any of the matched elements are assigned the given attribute.
$.fn.hasAttr = function(name) {
  return this.attr(name) !== undefined;
};


// Has classes
// Determine whether any of the matched elements are assigned the given classes.
$.fn.hasClasses = function(selectors) {
  for (var i in selectors) {
    if($(this).hasClass(selectors[i])) {
      return true;
    }
  }
  return false;
};
