export enum ActionType {
    Own,
    Awake,
    High,
    Reset,
    Mastery
}

export namespace Action {
    export type Own = {
        type: ActionType.Own,
        id: string;
        value: boolean;
    };

    export type Awake = {
        type: ActionType.Awake,
        id: string;
        value: boolean;
    };

    export type High = {
        type: ActionType.High,
        id: string;
        value: boolean
    };

    export type Mastery = {
        type: ActionType.Mastery,
        id: string;
        value: boolean;
    };

    export type Reset = {
        type: ActionType.Reset
    };

    export const creators = {
        own: (id: string, value: boolean): Own => ({ type: ActionType.Own, id, value }),
        awake: (id: string, value: boolean): Awake => ({ type: ActionType.Awake, id, value }),
        high: (id: string, value: boolean): High => ({ type: ActionType.High, id, value }),
        mastery: (id: string, value: boolean): Mastery => ({ type: ActionType.Mastery, id, value }),
        reset: (value: boolean): Reset => ({ type: ActionType.Reset })
    };
}

export type Action = Action.Awake | Action.High
    | Action.Own | Action.Mastery | Action.Reset;