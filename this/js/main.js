function getSum() {
    console.log(this); //window
}
getSum();

(function() {
    console.log(this); //window
})();

var getSum1=function() {
    console.log(this); //window
};
getSum1();

var objList = {
    name: 'methods',
    getSum: function() {
        console.log(this); //objList对象
    }
};
objList.getSum();


function Person() {
    console.log(this); //指向构造函数Person
}
var personOne = new Person();



// 箭头函数
(() => {
    console.log(this)//window
})()

let arrowFun = () => {
    console.log(this)//window
}
arrowFun()

let arrowObj = {
    arrFun: function() {
        (() => {
            console.log(this)//arrowObj
        })()
    }
}
arrowObj.arrFun();


// apply 和 call
function foo() {
    console.log(this);
}
foo.apply('我是apply改变的this值');//我是apply改变的this值
foo.call('我是call改变的this值');//我是call改变的this值

//间接调用函数,改变作用域的this值
var foo1 = {
    name:"张三",
    logName:function(){
        console.log(this.name);
    }
}
var bar={
    name:"李四"
};
foo1.logName.call(bar);//李四

//两个函数实现继承
function Animal(name){
    this.name = name;
    this.showName = function(){
        console.log(this.name);
    }
}
function Cat(name){
    Animal.call(this, name);
}
var cat = new Cat("Black Cat");
cat.showName(); //Black Cat

//为类数组(arguments和nodeList)添加数组方法push,pop
(function(){
    console.log(arguments);
    // Array.prototype.push.call(arguments,'王五');
    //console.log(arguments);//['张三','李四','王五']
})('张三','李四')

//合并数组
let arr1=[1,2,3];
let arr2=[4,5,6];
Array.prototype.push.apply(arr1,arr2); //将arr2合并到了arr1中
console.log(arr1);

//求数组最大值
let arr3=[1,2,3];
var max = Math.max.apply(null,arr3)
console.log(max);


var ret = Object.prototype.toString.call(max)
console.log(ret);

//bind
var name = '李四'
var foo2 = {
    name: "张三",
    logName: function(age) {
        console.log(this.name, age);
    }
}
var fooNew = foo2.logName;
var fooNewBind = foo2.logName.bind(foo2);
fooNew(10)//李四,10
fooNewBind(11)//张三,11  因为bind改变了fooNewBind里面的this指向
