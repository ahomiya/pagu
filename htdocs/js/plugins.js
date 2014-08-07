// Plugins
// jQuery plugins and other 3rd party scripts
// -----------------------------------------------------------------------------
// jQuery browser and OS detection plugin

// http://www.stoimen.com/blog/2009/07/16/jquery-browser-and-os-detection-plugin/
// http://www.stoimen.com/blog/2009/07/04/jquery-os-detection/
// http://www.quirksmode.org/js/detect.html

(function() {

  var clientDetect = {
    init: function () {
      this.browser  = this.searchString(this.dataBrowser) || "An unknown browser";
      this.version  = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "An unknown version";
      this.OS       = this.searchString(this.dataOS) || "An unknown OS";
    },
    searchString: function (data) {
      for (var i=0; i<data.length; i++) {
        var dataString = data[i].string;
        var dataProp   = data[i].prop;
        this.versionSearchString = data[i].versionSearch || data[i].identity;
        if (dataString) {
          if (dataString.indexOf(data[i].subString) != -1) {
            return data[i].identity;
          }
        }
        else if (dataProp) {
          return data[i].identity;
        }
      }
    },
    searchVersion: function (dataString) {
      var index = dataString.indexOf(this.versionSearchString);
      if (index == -1) return;
      return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },

    /* Browser */
    dataBrowser: [
      {
        string        : navigator.userAgent,
        subString     : "Chrome",
        identity      : "Browser-Chrome"
      },
      {
        string        : navigator.userAgent,
        subString     : "OmniWeb",
        versionSearch : "OmniWeb/",
        identity      : "Browser-OmniWeb"
      },
      {
        string        : navigator.vendor,
        subString     : "Apple",
        identity      : "Browser-Safari",
        versionSearch : "Version"
      },
      {
        prop          : window.opera,
        identity      : "Browser-Opera"
      },
      {
        string        : navigator.vendor,
        subString     : "iCab",
        identity      : "Browser-iCab"
      },
      {
        string        : navigator.vendor,
        subString     : "KDE",
        identity      : "Browser-Konqueror"
      },
      {
        string        : navigator.userAgent,
        subString     : "Firefox",
        identity      : "Browser-Firefox"
      },
      {
        string        : navigator.vendor,
        subString     : "Camino",
        identity      : "Browser-Camino"
      },
      {
        // For newer Netscapes (6+)
        string        : navigator.userAgent,
        subString     : "Netscape",
        identity      : "Browser-Netscape"
      },
      {
        string        : navigator.userAgent,
        subString     : "MSIE",
        identity      : "Browser-IE",
        versionSearch : "MSIE"
      },
      {
        string        : navigator.userAgent,
        subString     : "Gecko",
        identity      : "Browser-Mozilla",
        versionSearch : "rv"
      },
      {
        // For older Netscapes (4-)
        string        : navigator.userAgent,
        subString     : "Mozilla",
        identity      : "Netscape",
        versionSearch : "Browser-Mozilla"
      }
    ],

    /* OS */
    dataOS: [
      {
        string        : navigator.platform,
        subString     : "Win",
        identity      : "OS-Windows"
      },
      {
        string        : navigator.platform,
        subString     : "Mac",
        identity      : "OS-Mac"
      },
      {
        string        : navigator.userAgent,
        subString     : "iOS",
        identity      : "OS-iOS"
      },
      {
        string        : navigator.platform,
        subString     : "Linux",
        identity      : "OS-Linux"
      }
    ]

  };

  // Initialize
  clientDetect.init();
  window.$.client = {
    os      : clientDetect.OS,
    browser : clientDetect.browser
  };

  // Legacy IE
  // http://n33.co/2013/03/23/browser-on-jquery-19x-for-legacy-ie-detection
  var msie = document.documentMode;
  $.client.msie = !!msie;
  $.client.version = msie || 0;

})();


// Add CSS classes to the HTML element
$('html')
  .addClass($.client.os)          // OS
  .addClass($.client.browser);    // Browser

if ($.client.msie) {              // Internet Explorer
  $('html')
    .addClass('MSIE-' + $.client.version);

  // Hack - IE11
  if ($.client.version == 11) {
    $('html')
      .removeClass('Browser-Mozilla')
      .addClass('Browser-IE');
  }
}
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
