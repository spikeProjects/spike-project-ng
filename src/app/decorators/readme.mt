http://es6.ruanyifeng.com/#docs/decorator
https://github.com/tc39/proposal-decorators

1.
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;

2.如果觉得一个参数不够用，可以在修饰器外面再封装一层函数。
function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false

3.修饰器本质就是编译时执行的函数。
修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。

4.
class MyReactComponent extends React.Component {}
export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);

equls:

@connect(mapStateToProps, mapDispatchToProps)
export default class MyReactComponent extends React.Component {}

5.
如果同一个方法有多个修饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行。

function dec(id){
  console.log('evaluated', id);
  return (target, property, descriptor) => console.log('executed', id);
}

class Example {
    @dec(1)
    @dec(2)
    method(){}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1

除了注释，修饰器还能用来类型检查。所以，对于类来说，这项功能相当有用。从长期来看，它将是 JavaScript 代码静态分析的重要工具。

......
