require("babel-core/register");
require("babel-polyfill");


window.onload = function () {
	console.log("before invoke test()");
	test();
	console.log("after invoke test()")
}

async function test() {
	let ret = await asyncFoo()
	console.log(ret)
}

function asyncFoo() {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
		    console.log("asyncFoo")
			resolve("asyncFoo return")
		}, 2000)
	})
}

// before invoke test()
// bundle.js:52 after invoke test()
// bundle.js:58 asyncFoo
// bundle.js:29 asyncFoo return