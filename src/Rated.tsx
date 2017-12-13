import * as Dew from 'rxjs-dew-react';
import * as React from 'react';
import { State, Service } from './Service';
import { heros, HeroRating, Tier, Hero, HeroClass } from './hero';
import { RatedTier } from './RatedTier';
import { Segment, Checkbox, Message, Divider, Icon } from 'semantic-ui-react';

export namespace Rated {
    export type Props = {
        title: string;
        heroRatings: HeroRating[];
    };
    export type S = State & {
        myHeros?: boolean;
    };
}

function getOwnedHeroTags(hero: Hero, state: State): string[] {
    const tags = state.highSig.some(o => o === hero.heroId)
        ? ['awake', 'highSig']
        : state.awake.some(o => o === hero.heroId)
            ? ['awake']
            : [];
    if (state.masteries.some(m => m === 'mysticDisperion')) {
        if (hero.heroClass === HeroClass.Mystic) {
            tags.push('mysticDisperion');
        }
    }
    return tags;
}

function getRatingsTags(hero: Hero, ratings: HeroRating[]): string[] {
    const rating = ratings.find(r => r.heroId === hero.heroId);
    return rating && rating.tags && Object.keys(rating.tags) || [];
}

function getTier(hero: Hero & { tags: string[] }, ratings: HeroRating[]): Tier {
    const rating = ratings.find(r => r.heroId === hero.heroId);
    let tier = rating && rating.tier || Tier.Meh;
    for (let i = 0; i < hero.tags.length; i++) {
        let tag = hero.tags[i];
        tier += rating && rating.tags && rating.tags[tag] || 0;
    }
    return tier;
}

export class Rated extends Dew.BoundConsumer<Rated.Props, Rated.S, keyof State> {
    state: Rated.S = State.initial;
    protected store = this.storeMap.heros as Service;

    render() {
        const ratedHeros = this.state.myHeros
            ? heros
                .filter(hero => this.state.own.some(o => o === hero.heroId))
                .map(
                hero => ({
                    ...hero,
                    tags: getOwnedHeroTags(hero, this.state)
                })
                )
            : heros
                .map(
                hero => ({
                    ...hero,
                    tags: getRatingsTags(hero, this.props.heroRatings)
                })
                );
        const ratings = ratedHeros
            .map(
            hero => ({
                ...hero,
                tier: getTier(hero, this.props.heroRatings)
            })
            );

        const gods = ratings.filter(r => r.tier >= Tier.God);
        const demigods = ratings.filter(r => r.tier === Tier.DemiGod);
        const amazing = ratings.filter(r => r.tier === Tier.Amazing);
        const good = ratings.filter(r => r.tier === Tier.Good);
        const meh = ratings.filter(r => r.tier <= Tier.Meh);

        return (
            <div>
                <h1 style={{ color: '#eef' }}>{this.props.title}</h1>
                <Message info>
                    <span>Based on Seatin's Ranking Spreadsheet found </span>
                    <a href="https://docs.google.com/spreadsheets/u/1/d/1beR2CAlBQ2XBA3M1jJ1aPEfwE46eQt6LU-lzA0babxQ/htmlview#">here</a>.
                </Message>
                <Segment>
                    <Checkbox
                        checked={!!this.state.myHeros}
                        label="My Heros Only"
                        onChange={(e, v) => this.setState({ myHeros: v.checked })}
                    />
                    <Divider />
                    <Icon name="star" /> - Champion is Awakened<br/>
                    <Icon name="arrow up" /> - Champion has a High Signature<br/>
                    <Icon name="eye" /> - Summoner's Mystic Desperion Mastery aids this champion
                </Segment>
                <Segment.Group horizontal>
                    <RatedTier title="God" heroRatings={gods} />
                    <RatedTier title="Demigod" heroRatings={demigods} />
                    <RatedTier title="Amazing" heroRatings={amazing} />
                    <RatedTier title="Good" heroRatings={good} />
                    <RatedTier title="Meh" heroRatings={meh} />
                </Segment.Group>
            </div>
        );
    }
}