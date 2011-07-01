(function() {
	var head = document.getElementsByTagName('head')[0];
	if(!window.jQuery) {
		var jqs = document.createElement("script");
		jqs.type = "text/javascript";
		jqs.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"
		head.appendChild(jqs);
	}
	if(!window.jQuery || !jQuery.ui) {
		var jquis = document.createElement("script");
		jquis.type = "text/javascript";
		jquis.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"
		head.appendChild(jquis);
		var jquicss = document.createElement("LINK");
		jquicss.type = "text/css";
		jquicss.rel = "stylesheet";
		jquicss.rel = "http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.0/themes/redmond/jquery-ui.css";
		head.appendChild(jquicss);
	}
	var jqCSSEditor = document.createElement("script");
	jqCSSEditor.type = "text/javascript";
	jqCSSEditor.src = "https://raw.github.com/zodoz/jqCSSEditor/master";
	jqCSSEditor.onload = function() {
		jQuery.cssEditor();
	};
	head.appendChild(jqCSSEditor);
})(this);
