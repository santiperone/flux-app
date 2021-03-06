import dispatcher from '../Dispatcher.js'

export const COLOR_APP_ACTIONS = {
    CHANGE_COLOR: 'colorAppActions.ChangeColor'
}

export function changeColor(colorName) {
    dispatcher.dispatch({
        type: COLOR_APP_ACTIONS.CHANGE_COLOR,
        value: colorName
    })
}