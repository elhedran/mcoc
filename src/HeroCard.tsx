import * as Dew from 'rxjs-dew-react';
import * as React from 'react';
import { State, Service } from './Service';
import { Hero, heroColor } from './hero';
import { Card, Form, Label, Icon } from 'semantic-ui-react';
import { style, types } from 'typestyle';

export namespace HeroCard {
    export type Props = {
        hero: Hero;
    };
}

export class HeroCard extends Dew.BoundConsumer<HeroCard.Props, State, keyof State> {
    state = State.initial;
    protected store = this.storeMap.heros as Service;

    render() {
        const hero = this.props.hero;
        const color = heroColor(hero);

        return (
            <Card raised={true} color={color} className={style(cardStyle)}>
                <Card.Header>
                    <h3>{hero.name}</h3>
                    <Label color={color} attached="top right">{hero.heroClass}</Label>
                </Card.Header>
                <Card.Content>
                    <Form>
                        <Form.Group>
                            <Form.Checkbox
                                label="Owned"
                                checked={this.state.own.some(e => e === hero.heroId)}
                                onChange={(e, v) => v.checked !== undefined && this.store.own(hero.heroId, v.checked)}
                            />
                            <Form.Checkbox
                                checked={this.state.awake.some(e => e === hero.heroId)}
                                onChange={(e, v) => v.checked !== undefined && this.store.awake(hero.heroId, v.checked)}
                            />
                            <Icon name="star" />

                            <Form.Checkbox
                                checked={this.state.highSig.some(e => e === hero.heroId)}
                                onChange={(e, v) => v.checked !== undefined && this.store.high(hero.heroId, v.checked)}
                            />
                            <Icon name="arrow up" />
                        </Form.Group>
                    </Form>
                </Card.Content>
            </Card>
        );
    }
}

const cardStyle: types.NestedCSSProperties = {
    padding: 5,
    $nest: {
        'h3': { margin: 5 },
    }
};