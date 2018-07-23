// 第一种方式：字面量
var o1 = {name: 'o1'}
var o2 = new Object({name: 'o2'})
// 第二种方式：构造函数
var M = function (name) { this.name = name; }
var o3 = new M('o3')
// 第三种方式：Object.create
var p = {name: 'p'}
var o4 = Object.create(p)

console.log(o1)
console.log(o2)
console.log(o3)
console.log(o4)


console.log("Object.prototype", Object.prototype)
console.log("Function.prototype", Function.prototype)

console.log("M.prototype", M.prototype)
console.log("M.__proto__", M.__proto__)
console.log("o3.prototype", o3.prototype)
console.log("o3.__proto__", o3.__proto__)

console.log("M.prototype === Object.prototype", M.prototype === Object.prototype)
console.log("M.prototype === o3.__proto__",  M.prototype === o3.__proto__)

console.log("M.prototype.__proto__ === Object.prototype", M.prototype.__proto__ === Object.prototype)
console.log("M.__proto__ == Function.prototype", M.__proto__ == Function.prototype)
console.log("o3 instanceof(M)", o3 instanceof(M))

var o5 = new M()
o3.__proto__.say=function(){
    console.log('hello world')
}
console.log("o5", o5)

o3.say()
o5.say()
