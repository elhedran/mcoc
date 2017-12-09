import { State } from './State';
import { Action } from './Action';
import * as Dew from 'rxjs-dew';
import { Observable, Subject } from 'rxjs';
export { Observable, Subject };
export declare type Store = Dew.Store<State, Action>;
export declare type Service = Store & typeof Action.creators;
export declare const createStore: () => {
    dispatch$: Subject<Action>;
    action$: Observable<Action>;
    state$: Observable<State>;
};
export declare const createService: () => Service;
