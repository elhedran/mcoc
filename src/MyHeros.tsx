import * as React from 'react';
import * as Dew from 'rxjs-dew-react';
import { heros, heroCompare } from './hero';
import { Card, Form, Segment } from 'semantic-ui-react';
import { HeroCard } from './HeroCard';
import { State as ServiceState, Service } from './Service';

export namespace MyHeros {
    export type State = ServiceState & {
        filter?: string;
        onlyOwned?: boolean;
    };
}

export class MyHeros extends Dew.BoundConsumer<{}, MyHeros.State, keyof ServiceState> {
    state: MyHeros.State = ServiceState.initial;
    protected store = this.storeMap.heros as Service;

    render() {
        return (
            <div>
                <h1 style={{ color: '#eef' }}>My Champions</h1>
                <Segment style={{ maxWidth: 600 }}>
                    <h2> Filter</h2>
                    <Form>
                        <Form.Checkbox
                            label="Owned Only"
                            checked={!!this.state.onlyOwned}
                            onChange={(e, v) => this.setState({ onlyOwned: v.checked })}
                        />
                        <Form.Input
                            label="Name"
                            icon="search"
                            value={this.state.filter || ''}
                            onChange={(e, v) => this.setState({ filter: v.value })}
                        />
                    </Form>
                </Segment>
                <Card.Group >
                    {heros
                        .filter(h => !this.state.filter || h.name.search(new RegExp(this.state.filter, 'i')) !== -1)
                        .filter(h => !this.state.onlyOwned || this.state.own.some(o => o === h.heroId))
                        .sort(heroCompare)
                        .map(h => <HeroCard key={h.heroId} hero={h} />)}
                </Card.Group>
            </div>
        );
    }
}