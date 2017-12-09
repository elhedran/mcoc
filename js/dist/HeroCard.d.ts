/// <reference types="react" />
import * as Dew from 'rxjs-dew-react';
import { State, Service } from './Service';
import { Hero } from './hero';
export declare namespace HeroCard {
    type Props = {
        hero: Hero;
    };
}
export declare class HeroCard extends Dew.BoundConsumer<HeroCard.Props, State, keyof State> {
    state: State;
    protected store: Service;
    render(): JSX.Element;
}
