export type State = {
    own: string[];
    awake: string[];
    highSig: string[];
};

export const initialState: State = {
    own: [],
    awake: [],
    highSig: []
};