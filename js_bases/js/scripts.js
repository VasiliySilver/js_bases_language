window.onload = function () {
	var items = document.querySelectorAll('.items .item')
	var divPrice = document.querySelector('.value')
	for (var i = 0; i < items.length; i++) {
		items[i].onclick = function () {
			this.classList.toggle('item-active')
			calcPrice()
		}
	}
	function calcPrice () {
		var price = 0
		if (items[i].classList.contains('item-active')) {
			for (var i = 0; i < items.length; i++) {
				price += parseInt(items[i].getAttribute('data-price'))
			}
		}
		
	}
}