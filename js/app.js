$(function() {

	$('.js-slider').bxSlider({
		pager: false,
		onSlideBefore: function($slideElement, oldIndex, newIndex) {

			var $items = $slideElement.find('.slider_container_slide_item');

			$items.css('top', '-100%');
		},
		onSlideAfter: function($slideElement, oldIndex, newIndex) {

			var $items = $slideElement.find('.slider_container_slide_item');

			$items.each(function(idx, $el) {

				$($el).delay(idx * 400).animate({'top': Number($($el).attr('data-top'))}, 400);

			});

		}
	});

});