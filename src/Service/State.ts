export namespace State {
    export const initial: State = {
        own: [],
        awake: [],
        highSig: []
    };
}

export type State = {
    own: string[];
    awake: string[];
    highSig: string[];
};