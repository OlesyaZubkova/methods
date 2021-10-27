import { Character } from '../character';

import {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../classes';

describe('should show levelUp indicators correctly', () => {
  test('levelUp of Bowerman class', () => {
    const template = {
      name: 'Bowerman',
      type: 'Bowerman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    };
    const hero = new Bowerman('Bowerman');
    hero.levelUp();
    expect(template).toEqual(hero);
  });

  test('levelUp of Swordsman class', () => {
    const template = {
      name: 'Swordsman',
      type: 'Swordsman',
      health: 100,
      level: 2,
      attack: 48,
      defence: 12,
    };
    const hero = new Swordsman('Swordsman');
    hero.levelUp();
    expect(template).toEqual(hero);
  });

  test('levelUp of Magician class', () => {
    const template = {
      name: 'Magician',
      type: 'Magician',
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
    };
    const hero = new Magician('Magician');
    hero.levelUp();
    expect(template).toEqual(hero);
  });

  test('levelUp of Daemon class', () => {
    const template = {
      name: 'Daemon',
      type: 'Daemon',
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
    };
    const hero = new Daemon('Daemon');
    hero.levelUp();
    expect(template).toEqual(hero);
  });

  test('levelUp of Undead class', () => {
    const template = {
      name: 'Undead',
      type: 'Undead',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    };
    const hero = new Undead('Undead');
    hero.levelUp();
    expect(template).toEqual(hero);
  });

  test('levelUp of Zombie class', () => {
    const template = {
      name: 'Zombie',
      type: 'Zombie',
      health: 100,
      level: 2,
      attack: 48,
      defence: 12,
    };
    const hero = new Zombie('Zombie');
    hero.levelUp();
    expect(template).toEqual(hero);
  });
});

describe('should show damage indicators correctly', () => {
  test('damage of Bowerman class', () => {
    const template = {
      health: 96.25,
    };
    const hero = new Bowerman('Bowerman');
    hero.damage(5);
    expect(template.health).toBe(hero.health);
  });

  test('damage of Bowerman class', () => {
    const template = {
      health: 96.25,
    };
    const hero = new Bowerman('Bowerman');
    hero.damage(5);
    expect(template.health).toBe(hero.health);
  });

  test('damage of Swordsman class', () => {
    const template = {
      health: 68.5,
    };
    const hero = new Swordsman('Swordsman');
    hero.damage(35);
    expect(template.health).toBe(hero.health);
  });

  test('damage of Magician class', () => {
    const template = {
      health: 63.4,
    };
    const hero = new Magician('Magician');
    hero.damage(61);
    expect(template.health).toBe(hero.health);
  });

  test('damage of Daemon class', () => {
    const template = {
      health: 73.6,
    };
    const hero = new Daemon('Daemon');
    hero.damage(44);
    expect(template.health).toBe(hero.health);
  });

  test('damage of Undead class', () => {
    const template = {
      health: 2.5,
    };
    const hero = new Undead('Undead');
    hero.damage(130);
    expect(template.health).toBe(hero.health);
  });

  test('damage of Zombie class', () => {
    const template = {
      health: 55,
    };
    const hero = new Zombie('Zombie');
    hero.damage(50);
    expect(template.health).toBe(hero.health);
  });
});

describe('should check level of health correctly', () => {
  test('should check initial level of health', () => {
    expect(() => {
      const hero = new Character('Simon', 'Daemon');
      hero.health = 0;
      hero.levelUp();
    }).toThrow(new Error('Показатель здоровья на нуле!'));
  });

  test('should check level of health before damage method', () => {
    expect(() => {
      const hero = new Character('Simon', 'Daemon');
      hero.health = 0;
      hero.levelUp();
    }).toThrow(new Error('Показатель здоровья на нуле!'));
  });
});
