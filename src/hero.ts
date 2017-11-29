export enum Tier {
    God = 'God',
    DemiGod = 'DemiGod',
    Good = 'Good',
    Meh = 'Meh'
}

export enum HeroClass {
    Skill = 'Skill',
    Science = 'Science',
    Mystic = 'Mystic',
    Cosmic = 'Cosmic',
    Tech = 'Tech',
    Mutant = 'Mutant'
}

export type Hero = {
    heroId: string;
    name: string;
    heroClass: HeroClass;
}

export type HeroRating = {
    heroId: string;
    tier: Tier;
    needAwake?: boolean;
    needHighSig?: boolean;
    needSynergy?: string;
}

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