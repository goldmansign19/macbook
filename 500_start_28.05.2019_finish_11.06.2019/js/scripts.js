(function () {
	// body...
	var prices = mapFromSomewhere();

	var $selectColors = $('.orderLine__color');
	var $selectSizes = $('.orderLine__size');

	var $divSizes = $('.orderLine__variants-sizes').hide();
	var $price = $('.orderLine__price').hide();
	var $btn = $('.orderLine__button').hide();
	
	for(var id_color in prices){
		$('<option>').val(id_color)
					 .html(prices[id_color].name)
					 .appendTo($selectColors);
	}

	selectColors.on('change', function() {
		$selectSizes.find('option:gt(0)').remove();

		var id_color = $selectColors.val();

		if(prices[id_color] !== underfined) {
			var sizes = prices[id_color].sizes;

			for(var id_size in sizes){
				$('<option>').val(id_size)
							 .html(sizes[id_size].name)
							 .appendTo($selectSizes);
			}

			$divSizes.show();
		}
		else{
			$divSizes.hide();
		}

		$price.hide();
		$btn.hide();
	});

	$selectSizes.on('change', function(){
		var id_color = $selectColors.val();
		var id_size = $selectSizes.val();

		if(prices[id_color]) !== undefined &&
			prices[id_color].sizes[id_size] !== undefined ) {
			$prices.html(prices[id_color].sizes[id_size].price).show();
			$btn.show();
		}
		else{
			$price.hide();
			$btn.hide();
		}
	});

