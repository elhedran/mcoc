/// <reference types="react" />
import * as Dew from 'rxjs-dew-react';
import { State as ServiceState, Service } from './Service';
export declare namespace MyHeros {
    type State = ServiceState & {
        filter?: string;
        onlyOwned?: boolean;
    };
}
export declare class MyHeros extends Dew.BoundConsumer<{}, MyHeros.State, keyof ServiceState> {
    state: MyHeros.State;
    protected store: Service;
    render(): JSX.Element;
}
