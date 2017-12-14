import * as Dew from 'rxjs-dew-react';
import * as React from 'react';
import { State, Service } from './Service';
import { scoredChampions, HeroRating, Tier } from './hero';
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

export class Rated extends Dew.BoundConsumer<Rated.Props, Rated.S, keyof State> {
    state: Rated.S = State.initial;
    protected store = this.storeMap.heros as Service;

    render() {
        const refRatings = this.props.heroRatings;
        const myHeroes = this.state.myHeros;
        const state = this.state;

        const ratings = scoredChampions(!!myHeroes, state, refRatings);

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
                    <a
                        href={
                            'https://docs.google.com'
                            + '/spreadsheets/u/1/d/1beR2CAlBQ2XBA3M1jJ1aPEfwE46eQt6LU-lzA0babxQ/htmlview#'
                        }
                    >
                        here
                    </a>.
                </Message>
                <Segment>
                    <Checkbox
                        checked={!!this.state.myHeros}
                        label="My Heros Only"
                        onChange={(e, v) => this.setState({ myHeros: v.checked })}
                    />
                    <Divider />
                    <Icon name="star" /> - Champion is Awakened<br />
                    <Icon name="arrow up" /> - Champion has a High Signature<br />
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