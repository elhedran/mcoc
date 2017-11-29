import { HeroRating, Tier } from './hero';

export const offense: HeroRating[] = [
    { heroId: 'wv', tier: Tier.God, needAwake: true },
    { heroId: 'aa', tier: Tier.God, needAwake: true },
    { heroId: 'im', tier: Tier.God },
    { heroId: 'dv', tier: Tier.God, needAwake: true },
    { heroId: 'sw', tier: Tier.God, needAwake: true, needHighSig: true },
    { heroId: 'gr', tier: Tier.God }, 
    { heroId: 'mk', tier: Tier.God }, 
    { heroId: 'gp', tier: Tier.God },
    { heroId: 'md', tier: Tier.God, needSynergy: '?', needAwake: true },
    { heroId: 'hp', tier: Tier.God },
    { heroId: 'sl', tier: Tier.God, needAwake: true },
    { heroId: 'sm(ts)', tier: Tier.God },

    { heroId: 'wv(x23)', tier: Tier.DemiGod },
    { heroId: 'rg', tier: Tier.DemiGod },
    { heroId: 'st', tier: Tier.DemiGod, needAwake: true },
    { heroId: 'pl', tier: Tier.DemiGod, needAwake: true },
    { heroId: 'cb', tier: Tier.DemiGod }
];