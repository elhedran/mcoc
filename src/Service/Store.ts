import { State } from './State';
import { Action, ActionType } from './Action';
import * as Dew from 'rxjs-dew';
import { Observable, Subject } from 'rxjs';
export { Observable, Subject };

export type Store = Dew.Store<State, Action>;
export type Service = Store & typeof Action.creators;

function toggle(set: string[], action: { id: string, value: boolean }): string[] {
    return action.value
        ? [action.id, ...set.filter(i => i !== action.id)]
        : set.filter(i => i !== action.id);
}

function removeOrKeep(set: string[], action: { id: string, value: boolean }): string[] {
    return action.value
        ? set
        : set.filter(i => i !== action.id);
}

function addOrKeep(set: string[], action: { id: string, value: boolean }): string[] {
    return action.value
        ? [action.id, ...set.filter(i => i !== action.id)]
        : set;
}

const soak: Dew.Soak<State, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.Reset:
            return {
                own: [],
                awake: [],
                highSig: [],
                masteries: []
            };
        case ActionType.Mastery:
            return {
                ...state,
                masteries: toggle(state.masteries, action)
            };
        case ActionType.Own:
            return {
                ...state,
                own: toggle(state.own, action),
                awake: removeOrKeep(state.awake, action),
                highSig: removeOrKeep(state.highSig, action)
            };
        case ActionType.Awake:
            return {
                ...state,
                own: addOrKeep(state.own, action),
                awake: toggle(state.awake, action),
                highSig: removeOrKeep(state.highSig, action)
            };
        case ActionType.High:
            return {
                ...state,
                own: addOrKeep(state.own, action),
                awake: addOrKeep(state.awake, action),
                highSig: toggle(state.highSig, action)
            };
        default:
            break;
    }
    return state;
};

export const createStore = (): Store => {
    const initialStr = window && typeof Storage !== 'undefined' && window.localStorage.getItem('mcoc:heroList');
    let initial = initialStr && JSON.parse(initialStr) as State || State.initial;
    initial = {
        ...State.initial,
        ...initial
    };
    const store = Dew.createStore(
        undefined,
        soak,
        initial
    );
    store.state$.subscribe(state => {
        if (window && typeof Storage !== 'undefined') {
            window.localStorage.setItem('mcoc:heroList', JSON.stringify(state));
        }
    });
    return store;
};

export const createService = (): Service => Dew.createService(
    Action.creators,
    createStore()
);