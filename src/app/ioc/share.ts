import Share from './path/share';

export default {

    init(app) {

        app.share = new Share();

        app.setShare = data => app.share.setShare(data);

    }

};

