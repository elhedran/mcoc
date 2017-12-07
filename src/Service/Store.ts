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
                highSig: []
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

export const createStore = (): Store => Dew.createStore(
    undefined,
    soak,
    State.initial
);

export const createService = (): Service => Dew.createService(
    Action.creators,
    createStore()
);