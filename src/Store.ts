import { State, initialState } from './State';
import { Action, ActionType } from './Action';
import * as Dew from 'rxjs-dew';

export type Store = Dew.Store<State, Action>;

function toggle(set: string[], action: { id: string, value: boolean }): string[] {
    return action.value
        ? [action.id, ...set.filter(i => i !== action.id)]
        : set.filter(i => i !== action.id);
}

function limitTo(set: string[], action: { id: string, value: boolean }): string[] {
    return action.value
        ? set
        : set.filter(i => i !== action.id);
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
                awake: limitTo(state.awake, action),
                highSig: limitTo(state.highSig, action)
            };
        case ActionType.Awake:
        return {
            ...state,
            awake: toggle(state.awake, action),
            highSig: limitTo(state.highSig, action)            
        };
        case ActionType.High:
        return {
            ...state,
            highSig: toggle(state.highSig, action)
        };
        default:
            break;
    }
    return state;
};

export const createStore = () => Dew.createStore(
    undefined,
    soak,
    initialState
);