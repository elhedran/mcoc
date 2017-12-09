export namespace State {
    export const initial: State = {
        own: [],
        awake: [],
        highSig: [],
        masteries: []
    };
}

export type State = {
    own: string[];
    awake: string[];
    highSig: string[];
    masteries: string[];
};