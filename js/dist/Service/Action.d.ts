export declare enum ActionType {
    Own = 0,
    Awake = 1,
    High = 2,
    Reset = 3,
    Mastery = 4,
}
export declare namespace Action {
    type Own = {
        type: ActionType.Own;
        id: string;
        value: boolean;
    };
    type Awake = {
        type: ActionType.Awake;
        id: string;
        value: boolean;
    };
    type High = {
        type: ActionType.High;
        id: string;
        value: boolean;
    };
    type Mastery = {
        type: ActionType.Mastery;
        id: string;
        value: boolean;
    };
    type Reset = {
        type: ActionType.Reset;
    };
    const creators: {
        own: (id: string, value: boolean) => Own;
        awake: (id: string, value: boolean) => Awake;
        high: (id: string, value: boolean) => High;
        mastery: (id: string, value: boolean) => Mastery;
        reset: (value: boolean) => Reset;
    };
}
export declare type Action = Action.Awake | Action.High | Action.Own | Action.Mastery | Action.Reset;
