jquery.onhashchange
===================

jQuery Plugin that adds window.onhashchange event support for old browsers

This plugin allows jQuery users to use the onhashchange event using jQuery's event handling
functions, just like any other events, including event delegation and preventing event listener
conflicts.

##Usage##

Simply link to jquery.onhashchange.js and use as following:

 - `jquery.onhashchange(newHandler);`
   Enables the `hashchange` event and automatically adds `newHandler` as its handler.
 - `jquery.onhashchange(100);`
   **This only affects older browsers without `window.onhashchange` support.** The plugin creates a
   timer that observes the location hash and triggers a `hashchange` event when `location.hash`
   changes. This check is done at a 50ms interval by default. Passing a numeric value to the plugin
   changes the interval.
 - To add/remove additional handlers, simply use:
   `jquery(widnow).on('hashchange', someHandler);`
   `jquery(window).off('hashchange', someHandler);`
   
This plugin also adds a custom event `route`, that behaves exactly like `hashchange` but passes the
hash value along with the vent data.


##Background##
I decided to create this plguin after researching the available options for using
`window.onhashchange` in jQuery. A lot of answers/posters pointed to [Bell Allman's Hash Change
event](https://raw.github.com/cowboy/jquery-hashchange/v1.3/jquery.ba-hashchange.js), which looked
very robust and well-documented and popular. However, the latest version it'd be tested on was 1.4,
and I was using jQuery 1.7. And the plugin did not seem to work out of the box (to be fair, I was
pretty tired, so I didn't spent much time trying to figure it out once I saw that Firebug didn't
throw up any errors).

This is a much simpler plugin, and perhaps parts of its implementation are a little naive. It is
still in early alpha stages and hasn't been formally tested on any browsers other than Firefox
15.0.1. *So use it at your discretion.*

I'm sure there will be bugs and kinks that need to be worked out, but if anyone finds any or has
suggestions, please send them to [calvin@resilien7.com](mailto:calvin@resilien7.com), and I'll try
to get back to you.
