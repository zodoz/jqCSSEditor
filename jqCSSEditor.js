(function($) {
	var loaded = false,
		el,             // The CSS Editor DOM element
		rulesMeta,      // Information about the rules
		acRulesList,    // array of rule definitions for jQuery UI Autocomplete
		activeRule,     // the currently selected rule
		refreshTimeout; // when to refresh the style

  /**
 	* main function.
 	* gets the current editor or creates one.
 	*/
  $.cssEditor = function() {
		if(!loaded) {
			loadRules();
			buildCSSEditor();
			loaded = true;
		}
  };

	function loadRules() {
		rulesMeta = [];
		acRulesList = [];
		var rawRules = document.styleSheets, sheet, rule;
		for(var i=0;i<rawRules.length;i++) {
			sheet = rawRules[i];
			if(sheet.cssRules === null) {
				continue;
			}
			for(var j=0;j<sheet.cssRules.length;j++) {
				rule = sheet.cssRules[i];
				acRulesList.push(rule.selectorText);
				rulesMeta[rule.selectorText] =
						{
							sheet: i,
							rule: j,
							originalText: rule.style.cssText,
							currentText: rule.style.cssText,
							changed: false
						};
			}
		}
	}

	function cssChanged(evt) {
		refreshCSS();
	}

	var refreshing = false;
	function refreshCSS() {
		refreshTimeout = $.now()+300;
		if(refreshing)
			return;
		refreshing = true;

		doRefresh();

		function doRefresh() {
			if($.now() < refreshTimeout) {
				setTimeout(doRefresh,100);
				return;
			} else {
				var rule = rulesMeta[activeRule];
				var css = $('#styleText').val();
				rule.currentText = css.replace(/\n/g,"");
				document.styleSheets[rule.sheet].cssRules[rule.rule].style
					.cssText = css;
				refreshing = false;
			}
		}
	}

	function buildCSSEditor() {
		el = $('<div>',
				{
					id: 'jqCSSEditor',
					title: 'CSS Editor'
				}
			)
			.appendTo($('body'));
		var search = $('<input>',
				{
					type: 'text',
					id: 'mksearch',
					class: 'searchField'
				}
			)
			.appendTo(el);
		var styleText = $('<textarea>',
				{
					rows: 10,
					class: 'cssField',
					id: 'styleText'
				}
			)
			.keyup(cssChanged)
			.appendTo(el);
		el.dialog(
				{
					width: 320
				}
		);
		search.autocomplete(
				{
					source:acRulesList,
					select: function(evt, ui) {
						activeRule = ui.item.value;
						$('#styleText').val(
							rulesMeta[activeRule].currentText.replace(/;\s*/g,";\n")
						);
					}
				}
		);
		// append base cssEditor stylesheet for this element
		var thisStyles = $('<link>',
				{
					type: 'text/css',
					rel: 'stylesheet',
					href: '/css/cssEditor.css'
				}
			)
			.appendTo(el.parent());
	}
})(jQuery);
