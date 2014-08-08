require.config({
	shim: {
		jquery: {
			exports: '$'
		}
	},
	paths: {
		jquery: 'lib/jquery',
		artTemplate: 'lib/template'
	}
});

require( ['jquery','./index'], function ($, indexView) {
	indexView.init();
});