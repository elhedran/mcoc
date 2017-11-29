import { heros } from './hero';

import 'jasmine';

describe('hero', () => {
    it('should have unique hero ids', () => {
        for(let i = 0; i < heros.length; i++) {
            for (let j = i+1; j < heros.length; j++) {
                expect(heros[i].heroId).not.toEqual(heros[j].heroId);
            }
        }
    })
});