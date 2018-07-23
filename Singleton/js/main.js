// 单体模式
var Singleton = function(name){
    this.name = name;
};
Singleton.prototype.getName = function(){
    return this.name;
}
// 获取实例对象
var getInstance = (function() {
    console.log("step 1")
    var instance = null;
    return function(name) {
        console.log(instance)
        if(!instance) {//相当于一个一次性阀门,只能实例化一次
            instance = new Singleton(name);
            console.log("new Singleton")
        }
        return instance;
    }
})();
// 测试单体模式的实例,所以a===b
var a = getInstance("aa");
var b = getInstance("bb");

console.log(a === b)
