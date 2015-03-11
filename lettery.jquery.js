/*-----------------------------------------------
	lettery
	jQuery letter selecting plugin
	mostly for selecting letters that are doing 
	bad things when using fancy fonts
*/

(function ( $ ) {

	$.fn.lettery = function( letters, options ) {
		// This is the easiest way to have default options.
		var options = $.extend({
			// These are the defaults.
			styles: {},
			class: '.letters',
			words: false
		}, options );
		// get the input text
		// we'are getting html to preserve HTML tags
		$( this ).each(function( index ) {
			//console.log( index + ": " + $( this ).text() );
			var input = { text: $( this ).html() };
			// set output
			var output = '';
			// check if currently processing letter 
			// is in array of defined letters
			var isInArray = function isInArray(values, array) {
			  for(var i_v = 0; values.length > i_v; i_v++){
		  		if(array.indexOf(values[i_v]) > -1){
		  			return true;
		  		}
			  }
			}
			// go by words or by letters?
			if(options.words){
				var words = input.text.split(' ');					
				// iteratee through each word and assign span with class and styles (options)
				for(var i = 0; words.length > i; i++){
					if( isInArray( letters, words[i] ) ){
						output += '<span class="'+options.class+'">'+words[i]+' </span>';
					}else{
						output += words[i]+' ';
					}
				}
			}else{
				// iteratee through each letter and assign span with class and styles (options)
				for(var i = 0; input.text.length > i; i++){
					if( isInArray( letters, input.text[i] ) ){
						output += '<span class="'+options.class+'">'+input.text[i]+'</span>';
					}else{
						output += input.text[i];
					}

				}
			};

			$( this ).html( output ).children( '.'+options.class ).css( options.styles );
		});
		// Return this element back for chaining
		return this;
};
}( jQuery ));