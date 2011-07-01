(function($) {
	var loaded = false, el;

  /**
 	* main function.
 	* gets the current editor or creates one.
 	*/
  $.cssEditor = function() {
		if(!loaded) {
			buildCSSEditor();
			loaded = true;
		}
  };

	function buildCSSEditor() {
		el = $('<div>',
				{
					id: 'jqCSSEditor',
					html: "drag me!"
				}
			)
			.draggable()
			.appendTo($('body'));
	}
})(jQuery);