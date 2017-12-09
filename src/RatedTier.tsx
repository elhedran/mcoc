import * as Dew from 'rxjs-dew-react';
import * as React from 'react';
import { State, Service } from './Service';
import { Tier, Hero, heroCompare, heroColor } from './hero';
import { Segment, Label } from 'semantic-ui-react';

export namespace RatedTier {
    export type Props = {
        title: string;
        heroRatings: (Hero & { tags: string[] } & { tier: Tier })[]
    };
}

export class RatedTier extends Dew.BoundConsumer<RatedTier.Props, State, keyof State> {
    state = State.initial;
    protected store = this.storeMap.heros as Service;

    render() {
        return (
            <Segment>
                <h2>{this.props.title}</h2>
                {this.props.heroRatings
                    .sort(heroCompare)
                    .map(h => <Label key={h.heroId} color={heroColor(h)}>{h.name}</Label>)
                }
            </Segment>
        );
    }
}