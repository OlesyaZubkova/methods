import Magician from '../magician';

  test('should show levelUp of Magician class correctly', () => {
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

  test('should show damage of Magician class correctly', () => {
    const template = {
      health: 63.4,
    };
    const hero = new Magician('Magician');
    hero.damage(61);
    expect(template.health).toBe(hero.health);
  });