import Undead from '../undead';

  test('should show levelUp of Undead class correctly', () => {
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

  test('should show damage of Undead class correctly', () => {
    const template = {
      health: 2.5,
    };
    const hero = new Undead('Undead');
    hero.damage(130);
    expect(template.health).toBe(hero.health);
  });