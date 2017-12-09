import * as Dew from 'rxjs-dew-react';
import * as React from 'react';
import { State, Service } from './Service';
import { heros, HeroRating, Tier } from './hero';
import { RatedTier } from './RatedTier';

export namespace Rated {
    export type Props = {
        title: string;
        heroRatings: HeroRating[];
    };
}

export class Rated extends Dew.BoundConsumer<Rated.Props, State, keyof State> {
    state = State.initial;
    protected store = this.storeMap.heros as Service;

    render() {
        const heroRatings = this.props.heroRatings;
        const gods = heroRatings.filter(r => r.tier === Tier.God);
        const demigods = heroRatings.filter(r => r.tier === Tier.DemiGod);
        const good = heroRatings.filter(r => r.tier === Tier.Good);
        const meh = heros.filter(
            h => gods.every(g => g.heroId !== h.heroId)
                && demigods.every(g => g.heroId !== h.heroId)
                && good.every(g => g.heroId !== h.heroId)
        ).map(h => (
            {
                heroId: h.heroId,
                tier: Tier.Meh
            }));

        return (
            <div>
                <h1 style={{ color: '#eef' }}>{this.props.title}</h1>
                <div>
                    <RatedTier title="God Tier" heroRatings={gods} />
                    <RatedTier title="Demigod Tier" heroRatings={demigods} />
                    <RatedTier title="Good Tier" heroRatings={good} />
                    <RatedTier title="Meh Tier" heroRatings={meh} />
                </div>
            </div>
        );
    }
}