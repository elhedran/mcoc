/// <reference types="react" />
import * as Dew from 'rxjs-dew-react';
import { State, Service } from './Service';
import { HeroRating } from './hero';
export declare namespace Rated {
    type Props = {
        title: string;
        heroRatings: HeroRating[];
    };
    type S = State & {
        myHeros?: boolean;
    };
}
export declare class Rated extends Dew.BoundConsumer<Rated.Props, Rated.S, keyof State> {
    state: Rated.S;
    protected store: Service;
    render(): JSX.Element;
}
