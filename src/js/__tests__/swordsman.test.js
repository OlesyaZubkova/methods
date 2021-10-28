import Swordsman from '../swordsman';

  test('should show levelUp of Swordsman class correctly', () => {
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

  test('should show damage of Swordsman class correctly', () => {
    const template = {
      health: 68.5,
    };
    const hero = new Swordsman('Swordsman');
    hero.damage(35);
    expect(template.health).toBe(hero.health);
  });