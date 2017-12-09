import { HeroRating, Tier } from './hero';

export const offense: HeroRating[] = [
    { heroId: 'wv', tier: Tier.DemiGod, tags: { 'awake': 1 } },
    { heroId: 'aa', tier: Tier.DemiGod, tags: { 'awake': 1 } },
    { heroId: 'im', tier: Tier.God },
    { heroId: 'dv', tier: Tier.Good, tags: { 'awake': 1 } },
    { heroId: 'sw', tier: Tier.Good, tags: { 'awake': 1, 'highSig': 1 } },
    { heroId: 'gr', tier: Tier.God }, 
    { heroId: 'mk', tier: Tier.God }, 
    { heroId: 'gp', tier: Tier.God },
    { heroId: 'md', tier: Tier.Good, tags: { 'awake': 1, 'highSig': 1  } },
    { heroId: 'hp', tier: Tier.God },
    { heroId: 'sl', tier: Tier.DemiGod, tags: { 'awake': 1 } },
    { heroId: 'sm(ts)', tier: Tier.God },

    { heroId: 'wv(x23)', tier: Tier.DemiGod },
    { heroId: 'rg', tier: Tier.DemiGod },
    { heroId: 'st', tier: Tier.Good, tags: { 'awake': 1 } },
    { heroId: 'pl', tier: Tier.Good, tags: { 'awake': 1 } },
    { heroId: 'cb', tier: Tier.DemiGod }
];

export const defense: HeroRating[] = [];
    