export default function (selector, Clss) {
	var instances = [];

	$(selector).each(function (index, $element) {
		let instance = new Clss($element);
		instances.push(instance);
		instance.init();
	});

	return instances;
}
