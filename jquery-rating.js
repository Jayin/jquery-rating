(function($) {

	$.rating = {
		max_item: 0,
		currentRating: 0,
		init: function(onChange) {
			$(document).ready(function() {
				console.log("rating..init...");

				max_item = $('.ratenode').length;

				//only one can use
				function reset() {
					for (var i = 1; i <= max_item; i++) {
						$("#" + i).removeClass('rating nomal');
					}
				}

				$('.ratenode').bind('mouseover', function(event) {
					reset();
					$.rating.currentRating = parseInt(event.currentTarget.id);
					for (var i = 1; i <= $.rating.currentRating; i++) {
						$("#" + i).addClass('rating');
					}
					for (var i = $.rating.currentRating + 1; i <= max_item; i++) {
						$("#" + i).addClass('nomal');
					}
					if (onChange && typeof onChange === 'function') {
						onChange($.rating.currentRating);
					}

				});


			});
		}
		,getCurrentRating: function() {
			return $.rating.currentRating;
		}

	}


})(jQuery);
