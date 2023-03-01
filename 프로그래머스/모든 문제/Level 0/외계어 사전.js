function solution(spell, dic) {
    spell = spell.sort().join('');
    return dic.map(v => v.split('').sort().join('')).find(v => v === spell) !== undefined ? 1 : 2;
}g