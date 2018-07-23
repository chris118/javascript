"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var test = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
		var ret;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return asyncFoo();

					case 2:
						ret = _context.sent;

						console.log(ret);

					case 4:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function test() {
		return _ref.apply(this, arguments);
	};
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-core/register");
require("babel-polyfill");

window.onload = function () {
	console.log("before invoke test()");
	test();
	console.log("after invoke test()");
};

function asyncFoo() {
	return new _promise2.default(function (resolve, reject) {
		setTimeout(function () {
			console.log("asyncFoo");
			resolve("asyncFoo return");
		}, 2000);
	});
}

// before invoke test()
// bundle.js:52 after invoke test()
// bundle.js:58 asyncFoo
// bundle.js:29 asyncFoo return
