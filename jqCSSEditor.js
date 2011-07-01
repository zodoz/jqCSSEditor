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
			.appendTo($('body'))
			.dialog();
	}
})(jQuery);
