import * as React from 'react';
import { heros } from './hero';
import { Card } from 'semantic-ui-react';
import { HeroCard } from './HeroCard';

export const MyHeros: React.StatelessComponent = () => (
    <Card.Group >
        {heros
            .sort((a, b) =>
                a.heroClass === b.heroClass
                    ? a.name.localeCompare(b.name)
                    : a.heroClass.localeCompare(b.heroClass)
            )
            .map(h => <HeroCard key={h.heroId} hero={h} />)}
    </Card.Group>
);