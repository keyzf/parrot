'use strict';

var jsdom = require('jsdom').jsdom;
global.document = jsdom('<html></html>', {});
global.window = document.defaultView;

global.jQuery = global.$ = require('jquery');
console.log('jQuery loaded: ' + (global.jQuery != null && global.jQuery === jQuery));

require('jquery.browser');
console.log('jQuery.browser loaded: ' + (jQuery.browser != null));

require('jquery-deparam');
console.log('jQuery-deparam loaded: ' + (jQuery.deparam != null));

require('jquery-mousewheel')(jQuery);
console.log('jQuery-mousewheel loaded: ' + (jQuery.fn.mousewheel != null));

require('bootstrap');
console.log('bootstrap loaded: ' + (jQuery.fn.popover != null));

require('bootstrap-fileinput-npm');
console.log('bootstrap-fileinput loaded: ' + (jQuery.fn.fileinput != null));

global.moment = require('moment');
console.log('moment loaded: ' + (global.moment != null));

// global.React = require('react');
// console.log('react loaded: ' + (global.React != null));

global.jsface = require('jsface');
console.log('jsface loaded: ' + (global.jsface != null));

exports.unit_test = {
	setUp: function(done) {
		done();
	},
	defaultOptions: function(test) {
		test.expect(1);

		test.equal(true, true, 'Never occurs.');
		test.done();
	}
};
