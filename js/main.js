var prices, vm;

prices = [
	{"name": "Stone", "type": "raw", "rate": 310},
	{"name": "Iron Ore", "type": "raw", "rate": 500},
	{"name": "Nickel Ore", "type": "raw", "rate": 20},
	{"name": "Cobalt Ore", "type": "raw", "rate": 22},
	{"name": "Magnesium Ore", "type": "raw", "rate": 24},
	{"name": "Silicon Ore", "type": "raw", "rate": 22},
	{"name": "Silver Ore", "type": "raw", "rate": 20},
	{"name": "Gold Ore", "type": "raw", "rate": 20},
	{"name": "Platinum Ore", "type": "raw", "rate": 20},
	{"name": "Uranium Ore", "type": "raw", "rate": 44},
	{"name": "Ice", "type": "raw", "rate": 600}

	{"name": "Gravel", "type": "refined", "rate": 279},
	{"name": "Iron Ingot", "type": "refined", "rate": 350},
	{"name": "Nickel Ingot", "type": "refined", "rate": 8},
	{"name": "Cobalt Ingot", "type": "refined", "rate": 6.6},
	{"name": "Magnesium Powder", "type": "refined", "rate": 0.168},
	{"name": "Silicon Wafer", "type": "refined", "rate": 15.4},
	{"name": "Silver Ingot", "type": "refined", "rate": 2.2},
	{"name": "Gold Ingot", "type": "refined", "rate": 0.2},
	{"name": "Platinum Ingot", "type": "refined", "rate": 0.1},
	{"name": "Uranium Ingot", "type": "refined", "rate": 0.308}
];

function viewModel() {
	var self = this;
	self.prices = ko.observableArray(prices);
	self.selling = ko.observable();
	self.buying = ko.observable();
	self.sellAmount = ko.observable(100);
	self.buyAmount = ko.computed(function(){
		var amount = 0
		if (self.selling() && self.buying() && self.sellAmount() && self.sellAmount() > 0) {
			amount = self.sellAmount() / self.selling().rate * self.buying().rate;
			amount = Math.round(amount * 100) / 100
		}
		return amount;
	});
}

$(document).ready(function(){

	vm = new viewModel();
	ko.applyBindings(vm);

});
