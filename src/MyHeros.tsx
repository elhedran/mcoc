import * as React from 'react';
import * as Dew from 'rxjs-dew-react';
import { State, Service } from './Service';
import { heros } from './hero';
import { Card, Checkbox } from 'semantic-ui-react';

export class MyHeros extends Dew.Consumer<{}, State> {
    state = State.initial;
    protected store = this.storeMap.heros as Service;
    
    componentWillMount() {
        this.subscribe(this.store.state$);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const state = this.state;
        return (
            <Card.Group>
                {heros.map(h => (
                    <Card key={h.heroId}>
                        <Card.Header>{h.name}</Card.Header>
                        <Card.Content>
                            <Checkbox
                                label="Owned"
                                checked={state.own.some(e => e === h.heroId)}
                                onChange={(e, v) => v.checked !== undefined && this.store.own(h.heroId, v.checked)}
                            />
                            <Checkbox
                                label="Awake"
                                checked={this.state.awake.some(e => e === h.heroId)}
                                onChange={(e, v) => v.checked !== undefined && this.store.awake(h.heroId, v.checked)}
                            />
                            <Checkbox
                                label="High Signature"
                                checked={this.state.highSig.some(e => e === h.heroId)}                                
                                onChange={(e, v) => v.checked !== undefined && this.store.high(h.heroId, v.checked)}
                            />
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        );
    }
} 