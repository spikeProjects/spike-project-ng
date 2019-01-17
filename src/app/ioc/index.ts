import {App} from './app';
import Router from './router';
import Track from './track';

import Share from './share';

App.use([Router, Track]);
App.use(Share);

const appInstance = new App({
    router: {
        mode: 'history',
    },

    track: {
        // ...
    },

    onReady(app?) {
        app.setShare({
            title: 'Hello IoC.',
            description: 'description here...',
            // some other data here...
        });
    },

});
