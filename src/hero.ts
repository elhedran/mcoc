import { SemanticCOLORS } from 'semantic-ui-react';
import { State } from './Service';
import './find';

export namespace Tier {
    export const God = 4;
    export const DemiGod = 3;
    export const Amazing = 2;
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

export type TagAdjust = {
    awake?: number;
    highSig?: number;
    mysticDisperion?: number;
};

export type Hero = {
    heroId: string;
    name: string;
    heroClass: HeroClass;
};

export type HeroRating = {
    heroId: string;
    tier: Tier;
    tags?: TagAdjust;
    synergy?: {
        [key: string]: number;
    }
};

export const heros: Hero[] = [
    { heroId: 'wv', name: 'Wolverine', heroClass: HeroClass.Mutant },
    { heroId: 'aa', name: 'Archangel', heroClass: HeroClass.Mutant },
    { heroId: 'ice', name: 'Iceman', heroClass: HeroClass.Mutant },
    { heroId: 'wv(x23)', name: 'Wolverine (X-23)', heroClass: HeroClass.Mutant },
    { heroId: 'rogue', name: 'Rogue', heroClass: HeroClass.Mutant },
    { heroId: 'storm', name: 'Storm', heroClass: HeroClass.Mutant },
    { heroId: 'pl', name: 'Psylocke', heroClass: HeroClass.Mutant },
    { heroId: 'cable', name: 'Cable', heroClass: HeroClass.Mutant },
    { heroId: 'nc', name: 'Nightcrawler', heroClass: HeroClass.Mutant },
    { heroId: 'cc', name: 'Cyclops', heroClass: HeroClass.Mutant },
    { heroId: 'beast', name: 'Beast', heroClass: HeroClass.Mutant },
    { heroId: 'gb', name: 'Gambit', heroClass: HeroClass.Mutant },
    { heroId: 'dp(xf)', name: 'Deadpool X-Force', heroClass: HeroClass.Mutant },
    { heroId: 'magneto', name: 'Magneto', heroClass: HeroClass.Mutant },
    { heroId: 'oml', name: 'Old Man Logan', heroClass: HeroClass.Mutant },
    { heroId: 'col', name: 'Colossus', heroClass: HeroClass.Mutant },

    { heroId: 'dv', name: 'Doctor Voodoo', heroClass: HeroClass.Mystic },
    { heroId: 'sw', name: 'Scarlet Witch', heroClass: HeroClass.Mystic },
    { heroId: 'gr', name: 'Ghost Rider', heroClass: HeroClass.Mystic },
    { heroId: 'magik', name: 'Magik', heroClass: HeroClass.Mystic },
    { heroId: 'glt', name: 'Guillotine', heroClass: HeroClass.Mystic },
    { heroId: 'dm', name: 'Dormammu', heroClass: HeroClass.Mystic },
    { heroId: 'th', name: 'The Hood', heroClass: HeroClass.Mystic },
    { heroId: 'ms', name: 'Morningstar', heroClass: HeroClass.Mystic },
    { heroId: 'mp', name: 'Mephisto', heroClass: HeroClass.Mystic },
    { heroId: 't(jf)', name: 'Thor (Jane Foster)', heroClass: HeroClass.Mystic },
    { heroId: 'if', name: 'Iron Fist', heroClass: HeroClass.Mystic },
    { heroId: 'mordo', name: 'Mordo', heroClass: HeroClass.Mystic },
    { heroId: 'ds', name: 'Dr. Strange', heroClass: HeroClass.Mystic },
    { heroId: 'uc', name: 'Unstoppable Colossus', heroClass: HeroClass.Mystic },
    { heroId: 'jug', name: 'Juggernaut', heroClass: HeroClass.Mystic },
    { heroId: 'loki', name: 'Loki', heroClass: HeroClass.Mystic },

    { heroId: 'gp', name: 'Gwen Poole', heroClass: HeroClass.Skill },
    { heroId: 'blade', name: 'Blade', heroClass: HeroClass.Skill },
    { heroId: 'cb', name: 'Crossbones', heroClass: HeroClass.Skill },
    { heroId: 'bw', name: 'Black Widow', heroClass: HeroClass.Skill },
    { heroId: 'el', name: 'Elektra', heroClass: HeroClass.Skill },
    { heroId: 'dd(c)', name: 'Daredevil (Classic)', heroClass: HeroClass.Skill },
    { heroId: 't(r)', name: 'Thor (Ragnarock)', heroClass: HeroClass.Skill },
    { heroId: 'he', name: 'Hawk Eye', heroClass: HeroClass.Skill },
    { heroId: 'p', name: 'Punisher', heroClass: HeroClass.Skill },
    { heroId: 'ws', name: 'Winter Soldier', heroClass: HeroClass.Skill },
    { heroId: 'kn', name: 'Karnak', heroClass: HeroClass.Skill },
    { heroId: 'av', name: 'Agent Venom', heroClass: HeroClass.Skill },
    { heroId: 'bp(c)', name: 'Black Panther (Classic)', heroClass: HeroClass.Skill },
    { heroId: 'mk', name: 'Moon Knight', heroClass: HeroClass.Skill },
    { heroId: 'kp', name: 'Kingpin', heroClass: HeroClass.Skill },
    { heroId: 'falcon', name: 'Falcon', heroClass: HeroClass.Skill },
    { heroId: 'dd (n)', name: 'Daredevil (Netflix)', heroClass: HeroClass.Skill },
    { heroId: 'bp(cw)', name: 'Black Panther (Civil War)', heroClass: HeroClass.Skill },

    { heroId: 'med', name: 'Medusa', heroClass: HeroClass.Cosmic },
    { heroId: 'hp', name: 'Hyperion', heroClass: HeroClass.Cosmic },
    { heroId: 'ang', name: 'Angela', heroClass: HeroClass.Cosmic },
    { heroId: 'thor', name: 'Thor', heroClass: HeroClass.Cosmic },
    { heroId: 'drax', name: 'Drax', heroClass: HeroClass.Cosmic },
    { heroId: 'mm', name: 'Ms. Marvel', heroClass: HeroClass.Cosmic },
    { heroId: 'cm', name: 'Captain Marvel', heroClass: HeroClass.Cosmic },
    { heroId: 'bb', name: 'Black Bolt', heroClass: HeroClass.Cosmic },
    { heroId: 'phoenix', name: 'Phoenix', heroClass: HeroClass.Cosmic },
    { heroId: 'sms', name: 'Spider-Man Symbiote', heroClass: HeroClass.Cosmic },
    { heroId: 'gamora', name: 'Gamora', heroClass: HeroClass.Cosmic },
    { heroId: 'kg', name: 'King Groot', heroClass: HeroClass.Cosmic },
    { heroId: 'venom', name: 'Venom', heroClass: HeroClass.Cosmic },
    { heroId: 'sim', name: 'Superior Iron Man', heroClass: HeroClass.Cosmic },
    { heroId: 'vp', name: 'Venompool', heroClass: HeroClass.Cosmic },
    { heroId: 'ronan', name: 'Ronan', heroClass: HeroClass.Cosmic },
    { heroId: 'carnage', name: 'Carnage', heroClass: HeroClass.Cosmic },
    { heroId: 'groot', name: 'Groot', heroClass: HeroClass.Cosmic },
    { heroId: 'kk', name: 'Kamala Khan', heroClass: HeroClass.Cosmic },

    { heroId: 'sl', name: 'Star-Lord', heroClass: HeroClass.Tech },
    { heroId: 'sm(ts)', name: 'Spider-Man (Tony Stark)', heroClass: HeroClass.Tech },
    { heroId: 'vison', name: 'Vision', heroClass: HeroClass.Tech },
    { heroId: 'ultron', name: 'Ultron', heroClass: HeroClass.Tech },
    { heroId: 'do', name: 'Doctor Octopus', heroClass: HeroClass.Tech },
    { heroId: 'nebula', name: 'Nebula', heroClass: HeroClass.Tech },
    { heroId: 'p(2099)', name: 'Punisher 2099', heroClass: HeroClass.Tech },
    { heroId: 'gg', name: 'Green Goblin', heroClass: HeroClass.Tech },
    { heroId: 'rr', name: 'Rocket Raccoon', heroClass: HeroClass.Tech },
    { heroId: 'yondu', name: 'Yondo', heroClass: HeroClass.Tech },
    { heroId: 'htd', name: 'Howard The Duck', heroClass: HeroClass.Tech },
    { heroId: 'kang', name: 'Kang', heroClass: HeroClass.Tech },
    { heroId: 'vulture', name: 'Vulture', heroClass: HeroClass.Tech },
    { heroId: 'im', name: 'Iron Man', heroClass: HeroClass.Tech },
    { heroId: 'cw', name: 'Civil Warrior', heroClass: HeroClass.Tech },
    { heroId: 'wm', name: 'War Machine', heroClass: HeroClass.Tech },
    { heroId: 'hb', name: 'Hulk Buster', heroClass: HeroClass.Tech },
    { heroId: 'ip', name: 'Iron Patrio', heroClass: HeroClass.Tech },

    { heroId: 'hulk', name: 'Hulk', heroClass: HeroClass.Science },
    { heroId: 'yj', name: 'Yellow Jacket', heroClass: HeroClass.Science },
    { heroId: 'ca(ww2)', name: 'Captain America WW2', heroClass: HeroClass.Science },
    { heroId: 'quake', name: 'Quake', heroClass: HeroClass.Science },
    { heroId: 'ca(c)', name: 'Captain America (Classic)', heroClass: HeroClass.Science },
    { heroId: 'sm(c)', name: 'Spiderman (Classic)', heroClass: HeroClass.Science },
    { heroId: 'electro', name: 'Electro', heroClass: HeroClass.Science },
    { heroId: 'sg', name: 'Spider Gwen', heroClass: HeroClass.Science },
    { heroId: 'sm(mm)', name: 'Spider-Man Miles Morayles', heroClass: HeroClass.Science },
    { heroId: 'rh', name: 'Red Hulk', heroClass: HeroClass.Science },
    { heroId: 'rhino', name: 'Rhino', heroClass: HeroClass.Science },
    { heroId: 'jf', name: 'Joe Fixit', heroClass: HeroClass.Science },
    { heroId: 'sh', name: 'She Hulk', heroClass: HeroClass.Science },
    { heroId: 'lc', name: 'Luke Cage', heroClass: HeroClass.Science },
    { heroId: 'ab', name: 'Abonination', heroClass: HeroClass.Science },
    { heroId: 'am', name: 'Ant-Man', heroClass: HeroClass.Science },
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

function getOwnedHeroTags(hero: Hero, state: State): string[] {
    const tags = state.highSig.some(o => o === hero.heroId)
        ? ['awake', 'highSig']
        : state.awake.some(o => o === hero.heroId)
            ? ['awake']
            : [];
    if (state.masteries.some(m => m === 'mysticDisperion')) {
        if (hero.heroClass === HeroClass.Mystic) {
            tags.push('mysticDisperion');
        }
    }
    return tags;
}

function getRatingsTags(hero: Hero, ratings: HeroRating[]): string[] {
    const rating = ratings.find(r => r.heroId === hero.heroId);
    return rating && rating.tags && Object.keys(rating.tags) || [];
}

function getTier(hero: Hero & { tags: string[] }, ratings: HeroRating[]): Tier {
    const rating = ratings.find(r => r.heroId === hero.heroId);
    let tier = rating && rating.tier || Tier.Meh;
    for (let i = 0; i < hero.tags.length; i++) {
        let tag = hero.tags[i];
        tier += rating && rating.tags && rating.tags[tag] || 0;
    }
    return tier;
}

export const scoredChampions = (myHeroes: boolean, state: State, ratings: HeroRating[]) => {
    const ratedHeros = myHeroes
        ? heros
            .filter(hero => state.own.some(o => o === hero.heroId))
            .map(
            hero => ({
                ...hero,
                tags: getOwnedHeroTags(hero, state)
            })
            )
        : heros
            .map(
            hero => ({
                ...hero,
                tags: getRatingsTags(hero, ratings)
            })
            );
    return ratedHeros
        .map(
        hero => ({
            ...hero,
            tier: getTier(hero, ratings)
        })
        );
};