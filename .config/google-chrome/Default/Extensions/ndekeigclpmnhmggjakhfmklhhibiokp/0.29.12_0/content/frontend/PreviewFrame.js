"use strict";

(function() {

	function retrievePreview(event) {

		var data = JSON.parse(event.data);

		var PreviewIFrame = $('<iframe>', document)
			.attr("name", "bmmPreviewIframe")
			.attr("id", "bmmPreviewIframe")
			.hide()
			.appendTo("body");

		var DialogDataFORM = $("<form>", document)
			.attr("target", "bmmPreviewIframe")
			.attr("method", "post")
			.attr("action", data["host"] + "/services/preview")
			.prependTo(PreviewIFrame);
		
		var keys = [
			"to", "cc", "bcc", "subject", "body", "username", "userkey", 
			"email", "from", "template", "format", "browser", "version" 
		];

		if ("direction" in data) {
			keys.push("direction");
		}

		keys.forEach(function(key) {
			$("<input>", document)
				.attr("type", "hidden")
				.attr("name", key)
				.attr("value", data[key])
				.appendTo(DialogDataFORM);
			});

		// var event = document.createEvent("HTMLEvents");
		// event.initEvent("submit",true, true);
		// DialogDataFORM.get(0).dispatchEvent(event);

		DialogDataFORM.get(0).submit(); // for chrome	
	}

	function onMessage(event) {
		if (event.origin === "null") {
			if (event.data === "small" || event.data === "big") {
				$('#bmmPreviewIframe').show();
				parent.postMessage(event.data, "*");
			}
		}
		if (event.origin != null) {
			retrievePreview(event);
		}
	}

	window.addEventListener("message", onMessage, false);

	window.onload = function() {
		$("head").append(
			'<style media="screen" type="text/css">' +
				"html, body, iframe { " +
					"height: 100%; " +
					"width: 100%; " +
					"overflow: hidden; " +
					"display: block; " +
					"position: absolute; " +
					"margin: 0; " +
					"padding: 0; " +
					"border: 0; " +
					"outline: 0; " +
					"font-size: 100%; " +
					"background: transparent; " +
				"} " +
			'</style'
		)
	}
})();
