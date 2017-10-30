(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _index = require('./app/index');

var _index2 = _interopRequireDefault(_index);

var _batchInstantiate = require('./modules/batch-instantiate');

var _batchInstantiate2 = _interopRequireDefault(_batchInstantiate);

var _navbar = require('./components/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.time('Initialize');
// Modules

// Components


var app = new _index2.default();

app.init(function () {
	console.log('%cMantis Starter', 'color: #338656; font: 50px sans-serif;');
	console.debug(this);

	(0, _batchInstantiate2.default)('.navbar', _navbar2.default);

	console.timeEnd('Initialize');
});

},{"./app/index":2,"./components/navbar":3,"./modules/batch-instantiate":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _init2 = require('../modules/init');

var _init3 = _interopRequireDefault(_init2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.id = Date.now();
	}

	_createClass(App, [{
		key: 'init',
		value: function init(callback) {
			_init3.default.call(this, callback);
		}
	}]);

	return App;
}();

exports.default = App;

},{"../modules/init":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navbar = function () {
	function Navbar($element) {
		_classCallCheck(this, Navbar);

		this.elementSelector = '.navbar';
		this.collapseSelector = this.elementSelector + '__collapse';
		this.menuSelector = this.elementSelector + '__menu';
		this.collapseActiveClass = (this.collapseSelector + '--active').substr(1);

		this.$element = $($element);
		this.$collapse = this.$element.find(this.collapseSelector);
		this.$menu = this.$element.find(this.menuSelector);
	}

	_createClass(Navbar, [{
		key: 'bind',
		value: function bind() {
			this.$menu.on(this.handlers.$menu);
		}
	}, {
		key: 'init',
		value: function init() {
			this.bind();
		}
	}, {
		key: 'handlers',
		get: function get() {
			var _this = this;

			return {
				$menu: {
					click: function click() {
						_this.$collapse.toggleClass(_this.collapseActiveClass);
					}
				}
			};
		}
	}]);

	return Navbar;
}();

exports.default = Navbar;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (selector, Clss) {
	var instances = [];

	$(selector).each(function (index, $element) {
		var instance = new Clss($element);
		instances.push(instance);
		instance.init();
	});

	return instances;
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (callback) {
	if (document.readyState === 'complete') {
		callback.bind(this);
		return;
	}

	document.addEventListener('DOMContentLoaded', callback.bind(this), false);
};

},{}]},{},[1])

//# sourceMappingURL=app.js.map
