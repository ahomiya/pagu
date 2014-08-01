/**
 * Project                  : Pagu
 * Type                     : Website
 * JS libraries             : jQuery
 * JS features detection    : Modernizr
 * Developers               : Your name
 */

// -----------------------------------------------------------------------------
// Variables
var $window                 = $(window),
    $document               = $(document),
    $html                   = $('html'),
    $body                   = $('body');
// -----------------------------------------------------------------------------
// Functions


// -----------------------------------------------------------------------------
// Document ready
// Specify a function to execute when the DOM is fully loaded.
$document.ready(function() {

  // Log
  console.log('DOM is fully loaded.');
});
// -----------------------------------------------------------------------------
// Window - load
// Specify a function to execute when complete page is fully loaded.
$window.load(function() {

  // Log
  console.log('Page is fully loaded.');
});
// -----------------------------------------------------------------------------
// Window - resize
$window.resize(function() {

  // Log
  console.log('Window\'s is changed.');
});
