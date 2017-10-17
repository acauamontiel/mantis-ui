export default class Navbar {
	constructor($element) {
		this.elementSelector = '.navbar';
		this.collapseSelector = `${this.elementSelector}__collapse`;
		this.menuSelector = `${this.elementSelector}__menu`;
		this.collapseActiveClass = `${this.collapseSelector}--active`.substr(1);

		this.$element = $($element);
		this.$collapse = this.$element.find(this.collapseSelector);
		this.$menu = this.$element.find(this.menuSelector);
	}

	get handlers() {
		return {
			$menu: {
				click: () => {
					this.$collapse.toggleClass(this.collapseActiveClass);
				}
			}
		};
	}

	bind() {
		this.$menu.on(this.handlers.$menu);
	}

	init() {
		this.bind();
	}
}
