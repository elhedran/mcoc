import { SemanticCOLORS } from 'semantic-ui-react';

export namespace Tier {
    export const God = 3;
    export const DemiGod = 2;
    export const Good = 1;
    export const Meh = 0;
}

export type Tier = number;

export enum HeroClass {
    Skill = 'Skill',
    Science = 'Science',
    Mystic = 'Mystic',
    Cosmic = 'Cosmic',
    Tech = 'Tech',
    Mutant = 'Mutant'
}

export type Tag = 'awake' | 'highSig' | 'mysticDisperion';

export type Hero = {
    heroId: string;
    name: string;
    heroClass: HeroClass;
};

export type HeroRating = {
    heroId: string;
    tier: Tier;
    tags?: {
        [key: string]: number;
    };
    synergy?: {
        [key: string]: number;
    }
};

export const heros: Hero[] = [
    { heroId: 'wv', name: 'Wolverine', heroClass: HeroClass.Mutant },
    { heroId: 'aa', name: 'Archangel', heroClass: HeroClass.Mutant },
    { heroId: 'im', name: 'IceMan', heroClass: HeroClass.Mutant },
    { heroId: 'dv', name: 'Doctor Voodoo', heroClass: HeroClass.Mystic },
    { heroId: 'sw', name: 'Scarlet Witch', heroClass: HeroClass.Mystic },
    { heroId: 'gr', name: 'Ghost Rider', heroClass: HeroClass.Mystic },
    { heroId: 'mk', name: 'Magik', heroClass: HeroClass.Mystic },
    { heroId: 'gp', name: 'Gwen Poole', heroClass: HeroClass.Skill },
    { heroId: 'bl', name: 'Blade', heroClass: HeroClass.Skill },
    { heroId: 'md', name: 'Medusa', heroClass: HeroClass.Science },
    { heroId: 'hp', name: 'Hyperion', heroClass: HeroClass.Science },
    { heroId: 'sl', name: 'Star-Lord', heroClass: HeroClass.Tech },
    { heroId: 'sm(ts)', name: 'Spider-Man (Tony Stark', heroClass: HeroClass.Tech },

    { heroId: 'wv(x23)', name: 'Wolverine (X-23)', heroClass: HeroClass.Mutant },
    { heroId: 'rg', name: 'Rogue', heroClass: HeroClass.Mutant },
    { heroId: 'st', name: 'Storm', heroClass: HeroClass.Mutant },
    { heroId: 'pl', name: 'Psylocke', heroClass: HeroClass.Mutant },
    { heroId: 'cb', name: 'Cable', heroClass: HeroClass.Mutant }

];

export const heroCompare: (a: Hero, b: Hero) => number = (a, b) =>
    a.heroClass === b.heroClass
        ? a.name.localeCompare(b.name)
        : a.heroClass.localeCompare(b.heroClass);

export const heroColor: (a: Hero) => SemanticCOLORS = (hero) => {
    var color: SemanticCOLORS;
    switch (hero.heroClass) {
        case HeroClass.Cosmic:
            color = 'teal';
            break;
        case HeroClass.Mutant:
            color = 'yellow';
            break;
        case HeroClass.Mystic:
            color = 'purple';
            break;
        case HeroClass.Science:
            color = 'green';
            break;
        case HeroClass.Skill:
            color = 'red';
            break;
        case HeroClass.Tech:
            color = 'blue';
            break;
        default:
            color = 'black';
            break;
    }
    return color;
};