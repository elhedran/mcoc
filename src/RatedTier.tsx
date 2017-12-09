import * as Dew from 'rxjs-dew-react';
import * as React from 'react';
import { State, Service } from './Service';
import { heros, HeroRating, heroCompare, heroColor } from './hero';
import { Segment, Label } from 'semantic-ui-react';

export namespace RatedTier {
    export type Props = {
        title: string;
        heroRatings: HeroRating[];
    };
}

export class RatedTier extends Dew.BoundConsumer<RatedTier.Props, State, keyof State> {
    state = State.initial;
    protected store = this.storeMap.heros as Service;

    render() {
        const own = this.state.own;
        const awake = this.state.awake;
        const high = this.state.highSig;

        return (
            <Segment>
                <h2>{this.props.title}</h2>
                {heros
                    .filter(h => {
                        const god = this.props.heroRatings.find(g => g.heroId === h.heroId);
                        return god
                            && own.some(o => o === h.heroId)
                            && (!god.needAwake || awake.some(o => o === h.heroId))
                            && (!god.needHighSig || high.some(o => o === h.heroId));
                    })
                    .sort(heroCompare)
                    .map(h => <Label key={h.heroId} color={heroColor(h)}>{h.name}</Label>)
                }
            </Segment>
        );
    }
}