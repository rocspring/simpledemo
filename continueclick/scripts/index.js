define([
		'jquery',
		'artTemplate',
		'./templates'
	], function ( $, artTemplate, templates ) {
	
	function init () {
		console.log('Hellow world!');
	}

	var indexView = {
		init : init
	};

	window.indexView = indexView;

	return indexView;
});