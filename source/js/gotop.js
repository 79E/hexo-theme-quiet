( function ( $ ) {
	jQuery.fn.gotoTop = function ( opt ) {
		var ele = this;
		var win = $( window );
		var doc = $( 'html,body' );
		var index = false;
		var defaultOpt = {
			offset: 420,
			speed: 500,
			iconSpeed: 200,
			animationShow: {
				'opacity': '1'
			},
			animationHide: {
				'opacity': '0'
			}
		};
		var options = $.extend( defaultOpt, opt );
		ele.click( function () {
			doc.animate( {
				scrollTop: '0'
			}, options.speed )
		} );
		$.each( options.animationShow, function ( i ) {
			if ( i == 'transform' ) {
				index = true
			}
		} );

		function animateShow () {
			if ( index ) {
				ele.css( options.animationShow )
			} else {
				ele.stop()
					.animate( options.animationShow, options.iconSpeed )
			}
		}

		function animateHide () {
			if ( index ) {
				ele.css( options.animationHide )
			} else {
				ele.stop()
					.animate( options.animationHide, options.iconSpeed )
			}
		}
		win.scroll( function () {
			if ( win.scrollTop() > options.offset ) {
				animateShow()
			} else {
				animateHide()
			}
		} );
		if ( win.scrollTop() > options.offset ) {
			ele.css( options.animationShow )
		} else {
			ele.css( options.animationHide )
		}
	}
}( jQuery ) );
