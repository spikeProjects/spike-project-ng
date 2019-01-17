import Track from './path/track';

export default {
    init(app) {
        app.track = new Track(app.options.track);
        app.track.tracking();
    }
};
