import * as Dew from 'rxjs-dew-react';
import * as React from 'react';
import { State, Service } from './Service';
import { heros, HeroRating, Tier, Hero } from './hero';
import { RatedTier } from './RatedTier';

export namespace Rated {
    export type Props = {
        title: string;
        heroRatings: HeroRating[];
    };
}

function getTags(hero: Hero, state: State): string[] {
    return state.highSig.some(o => o === hero.heroId)
        ? ['awake', 'highSig']
        : state.awake.some(o => o === hero.heroId)
            ? ['awake']
            : [];
}

function getTier(hero: Hero & { tags: string[] }, ratings: HeroRating[]): Tier {
    let rating = ratings.find(r => r.heroId === hero.heroId);
    let tier = rating && rating.tier || Tier.Meh;
    for (let i = 0; i < hero.tags.length; i++) {
        let tag = hero.tags[i];
        tier += rating && rating.tags && rating.tags[tag] || 0;
    }
    return tier;
}

export class Rated extends Dew.BoundConsumer<Rated.Props, State, keyof State> {
    state = State.initial;
    protected store = this.storeMap.heros as Service;

    render() {
        const ratings = heros
            .filter(hero => this.state.own.some(o => o === hero.heroId))
            .map(
            hero => ({
                ...hero,
                tags: getTags(hero, this.state)
            })
            )
            .map(
            hero => ({
                ...hero,
                tier: getTier(hero, this.props.heroRatings)
            })
            );

        const gods = ratings.filter(r => r.tier >= Tier.God);
        const demigods = ratings.filter(r => r.tier === Tier.DemiGod);
        const good = ratings.filter(r => r.tier === Tier.Good);
        const meh = ratings.filter(r => r.tier <= Tier.Meh);

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