export class App {
    static modules = [];
    options;
    static use(module) {
        Array.isArray(module) ? module.map(item => App.use(item)) : App.modules.push(module);
    }

    constructor(options) {
        this.options = options;
        this.init();
    }

    init() {
        window.addEventListener('DOMContentLoaded', () => {
            this.initModules();
            this.options.onReady(this);
        });
    }

    initModules() {
        App.modules.map(module => module.init && typeof module.init === 'function' && module.init(this));
/*
模块必须包含 init 属性
init 必须是一个函数
这其实就是 IoC 思想中对「面向接口编程 而不要面向实现编程」这一准则的很好的体现。App 不关心模块具体实现了什么，只要满足对 接口 init 的「约定」就可以了。
*/
    }
}
