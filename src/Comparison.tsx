import * as Dew from 'rxjs-dew-react';
import * as React from 'react';
import { State, Service } from './Service';
import { scoredChampions, HeroRating, Tier } from './hero';
import { RatedTier } from './RatedTier';
import { Segment, Checkbox, Message, Divider, Icon, Table } from 'semantic-ui-react';

export namespace Comparison {
    export type Props = {
        offense: HeroRating[];
        defense: HeroRating[];
    };
    export type S = State & {
        myHeros?: boolean;
    };
}

export class Comparison extends Dew.BoundConsumer<Comparison.Props, Comparison.S, keyof State> {
    state: Comparison.S = State.initial;
    protected store = this.storeMap.heros as Service;

    render() {
        const myHeroes = !!this.state.myHeros;
        const offenseRatings = scoredChampions(myHeroes, this.state, this.props.offense);
        const defenseRatings = scoredChampions(myHeroes, this.state, this.props.defense);

        const offenseChampions = offenseRatings
            .filter(h => defenseRatings.some(d => d.heroId === h.heroId && d.tier <= h.tier));
        const defenseChampions = defenseRatings
            .filter(h => offenseRatings.some(d => d.heroId === h.heroId && d.tier <= h.tier));

        return (
            <div>
                <h1 style={{ color: '#eef' }}>Comparison</h1>
                <Message info>
                    <p>
                    <span>Based on Seatin's Ranking Spreadsheet found </span>
                    <a
                        href={
                            'https://docs.google.com'
                            + '/spreadsheets/u/1/d/1beR2CAlBQ2XBA3M1jJ1aPEfwE46eQt6LU-lzA0babxQ/htmlview#'
                        }
                    >
                        here
                    </a>.
                    </p>
                    <p>
                        This places heros as to whether they are stronger
                        on offense, defense. Some champions will appear in both columns,
                        but may have different requirements for their tier in the role for the column.
                    </p>
                </Message>
                <Segment>
                    <Checkbox
                        checked={!!this.state.myHeros}
                        label="My Champions Only"
                        onChange={(e, v) => this.setState({ myHeros: v.checked })}
                    />
                    <Divider />
                    <Icon name="star" /> - Champion is Awakened<br />
                    <Icon name="arrow up" /> - Champion has a High Signature<br />
                    <Icon name="eye" /> - Summoner's Mystic Desperion Mastery aids this champion
                </Segment>
                <Segment>
                    <Table definition>
                        <Table.Header>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Offense</Table.HeaderCell>
                            <Table.HeaderCell>Defense</Table.HeaderCell>
                        </Table.Header>
                        <Table.Row>
                            <Table.Cell verticalAlign="top">God</Table.Cell>
                            <Table.Cell verticalAlign="top">
                                <RatedTier heroRatings={offenseChampions.filter(h => h.tier >= Tier.God)} />
                            </Table.Cell>
                            <Table.Cell verticalAlign="top">
                                <RatedTier heroRatings={defenseChampions.filter(h => h.tier >= Tier.God)} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell verticalAlign="top">Demigod</Table.Cell>
                            <Table.Cell verticalAlign="top">
                                <RatedTier
                                    heroRatings={
                                        offenseChampions.filter(
                                            h => h.tier < Tier.God && h.tier >= Tier.DemiGod
                                        )
                                    }
                                />
                            </Table.Cell>
                            <Table.Cell verticalAlign="top">
                                <RatedTier
                                    heroRatings={
                                        defenseChampions.filter(
                                            h => h.tier < Tier.God && h.tier >= Tier.DemiGod
                                        )
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell verticalAlign="top">Amazing</Table.Cell>
                            <Table.Cell verticalAlign="top">
                                <RatedTier
                                    heroRatings={
                                        offenseChampions.filter(
                                            h => h.tier < Tier.DemiGod && h.tier >= Tier.Amazing
                                        )
                                    }
                                />
                            </Table.Cell>
                            <Table.Cell verticalAlign="top">
                                <RatedTier
                                    heroRatings={
                                        defenseChampions.filter(
                                            h => h.tier < Tier.DemiGod && h.tier >= Tier.Amazing
                                        )
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell verticalAlign="top">Good</Table.Cell>
                            <Table.Cell verticalAlign="top">
                                <RatedTier
                                    heroRatings={
                                        offenseChampions.filter(
                                            h => h.tier < Tier.Amazing && h.tier >= Tier.Good
                                        )
                                    }
                                />
                            </Table.Cell>
                            <Table.Cell verticalAlign="top">
                                <RatedTier
                                    heroRatings={
                                        defenseChampions.filter(
                                            h => h.tier < Tier.Amazing && h.tier >= Tier.Good
                                        )
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell verticalAlign="top">Meh</Table.Cell>
                            <Table.Cell verticalAlign="top">
                                <RatedTier
                                    heroRatings={
                                        offenseChampions.filter(
                                            h => h.tier < Tier.Good
                                        )
                                    }
                                />
                            </Table.Cell>
                            <Table.Cell verticalAlign="top">
                                <RatedTier
                                    heroRatings={
                                        defenseChampions.filter(
                                            h => h.tier < Tier.Good
                                        )
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table>
                </Segment>
            </div>
        );
    }
}