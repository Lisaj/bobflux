import * as b from 'bobril';
import { IState, bootstrap as funBootstrap, IBootstrapParams } from 'fun-model';

export {
    IBootstrapParams,
    ICursor,
    ICursorFactory,
    IState,
    IActionHandler,
    getState,
    setState,
    rootCursor,
    shallowCopy,
    IAction,
    createAction,
    createActions,
    createParamLessAction,
    createParamLessActions,
    debugCallbackType
} from 'fun-model';

export * from './src/component';
export * from './src/routeComponent';
export * from './src/dataComponent';

export const bootstrap = (defaultState: IState, params: IBootstrapParams = {}) => {
    funBootstrap(defaultState, () => b.invalidate(), params);
};

export const defaultStateName = "";
