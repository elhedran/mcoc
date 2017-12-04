import * as React from 'react';
import * as Dew from 'rxjs-dew-react';
import { Action } from './Action';
import { State, initialState } from './State';
import { heros } from './hero';
import { Card, Checkbox } from 'semantic-ui-react';

export class MyHeros extends Dew.Component<{}, State, State, Action> {
    state = initialState;

    render() {
        return (
            <Card.Group>
                {heros.map(h => (
                    <Card key={h.heroId}>
                        <Card.Header>{h.name}</Card.Header>
                        <Card.Content>
                            <Checkbox label="Owned"/>
                            <Checkbox label="Awake"/>
                            <Checkbox label="High Signature"/>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        );
    }
} 