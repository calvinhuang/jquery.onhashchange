jquery.onhashchange
===================

jQuery Plugin that adds window.onhashchange event support

This plugin allows jQuery users to use the onhashchange event using jQuery's event handling
functions, just like any other events, including event delegation and preventing event listern
conflicts.

Usage:

Simply link to jquery.onhashchange.js and use as following:

 - `jquery.onhashchange(newHandler);`
   Enables the `hashchange` event and automatically adds `newHandler` as its handler.
 - `jquery.onhashchange(100);`
   This only affects older browsers without `window.onhashchange` support. The plugin creates a timer that observes the location hash and triggers a `hashchange` event when `location.hash` changes. This check is done at a 50ms interval by default. Passing a numeric value to the plugin changes the interval.
 - To add additional handlers, simply use:
   `jquery.on('hashchange', someHandler);
