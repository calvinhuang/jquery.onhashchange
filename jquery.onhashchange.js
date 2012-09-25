/*
 * jQuery OnHashChange Event Plugin
 * @author Calvin Huang
 * @version 0.1.0
 * http://github.com/calvinhuang/jquery.onhashchange
 * 
 * @license Copyright © 2012 Calvin Huang
 * Released MIT/GPL2 Licensed
 */

/*jslint plusplus:true */
/*globals console, Node, escape, jQuery */

(function($){
	'use strict';
	
	$.fn.onhashchange = function(fn){
		var oldHandler, newHandler, ohcWatcher, watchDelay = 50, oldHash, ohcEvent = 'hashchange';
		
		if (typeof fn === 'function') {
			newHandler = fn;
		} else if (typeof fn === 'number') {
			watchDelay = fn;
		}
	
		function checkHashChange() {
			var newHash = window.location.hash;
			if (oldHash !== newHash) {
				oldHash = newHash;
				$.trigger(ohcEvent);
			}
		}
	
		if (typeof window.onhashchange === 'undefined') {
			//@TODO: implement shim
			ohcWatcher = setInterval(checkHashChange, watchDelay);
		} else {
			oldHandler = window.onhashchange;
		}
		
		if (oldHandler !== null) {
			// re-attach original event handler
			$.on(ohcEvent, oldHandler);
		}
		if (newHandler !== undefined) {
			$.on(ohcEvent, newHandler);
		}
		
	};
	
	$.fn.onhashchange();
	
}(jQuery));