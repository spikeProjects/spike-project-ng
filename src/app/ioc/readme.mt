https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650588872&idx=1&sn=db86390b56263c1860e4dcf978971964&chksm=8891d6ecbfe65ffaf49377a70e1d5889dd367e1d4fc883351692820689aba9f611ba5441fc0f&scene=0&xtrack=1#rd

什么是 IoC

IoC 的全称叫做 Inversion of Control，可翻译为为「控制反转」或「依赖倒置」，它主要包含了三个准则：

高层次的模块不应该依赖于低层次的模块，它们都应该依赖于抽象

抽象不应该依赖于具体实现，具体实现应该依赖于抽象

面向接口编程 而不要面向实现编程



总结
App 模块此时应该称之为「容器」比较合适了，跟业务已经没有任何关系了，它仅仅只是提供了一些方法来辅助管理注入的依赖和控制模块如何执行。

控制反转（Inversion of Control）是一种「思想」，依赖注入（Dependency Injection）则是这一思想的一种具体「实现方式」，而这里的 App 则是辅助依赖管理的一个「容器」。

关于奇舞周刊