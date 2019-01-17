import Router from './path/router';

export default {

    init(app) {

        app.router = new Router(app.options.router);

        app.router.to('home');

    }

};
