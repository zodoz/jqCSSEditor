(function($) {
	var loaded = false, el;

  /**
 	* main function.
 	* gets the current editor or creates one.
 	*/
  $.cssEditor = function() {
		if(!loaded) {
			console.log(jQuery.ui.version);
			buildCSSEditor();
			loaded = true;
		}
  };

	function buildCSSEditor() {
		el = $('<div>',
				{
					id: 'jqCSSEditor',
					title: 'CSS Editor',
					html: "drag me!"
				}
			)
			.appendTo($('body'));
		var sliders = $(
				"<div id='red'/><div id='green'/><div id='blue'/><div id='swatch'/>"
			);
		sliders.children("#red,#green,#blue")
			.css({width:100});
		sliders.children("#swatch")
			.css({float:left,width:100,height:100});
		sliders.appendTo(el);
		el.dialog();
	}
})(jQuery);
