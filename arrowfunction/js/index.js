window.onload = function () {
	console.log("window loaded!");
	
	 foo();
	 
	 var obj = new Mytype();

}


//箭头函数解决this 作用域问题
function foo() {
	
	document.addEventListener('click',
		event => this.dosomthing(event.type)
	,false);
	
}

function dosomthing(type) {
	console.log("do something   type=" + type);
}

//箭头函数不能new 没有prototype
var Mytype = () => {}