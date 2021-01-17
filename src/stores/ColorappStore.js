import dispatcher from '../Dispatcher';
import * as ColorappActions from '../actions/ColorappActions';
import {EventEmitter} from 'events';

class ColorappStore extends EventEmitter {
    constructor() {
        super();
    }
    handleActions(action) {

    }

}

const colorAppStore = new ColorappStore();
dispatcher.register(colorAppStore.handleActions.bind(colorAppStore));

expor default colorAppStore