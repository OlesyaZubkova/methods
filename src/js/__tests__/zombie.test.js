import Zombie from '../zombie';

  test('should show levelUp of Zombie class correctly', () => {
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

  test('should show damage of Zombie class correctly', () => {
    const template = {
      health: 55,
    };
    const hero = new Zombie('Zombie');
    hero.damage(50);
    expect(template.health).toBe(hero.health);
  });