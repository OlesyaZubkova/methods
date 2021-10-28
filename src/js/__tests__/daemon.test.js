import Daemon from '../daemon';

  test('should show levelUp of Daemon class correctly', () => {
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

  test('should show damage of Daemon class correctly', () => {
    const template = {
      health: 73.6,
    };
    const hero = new Daemon('Daemon');
    hero.damage(44);
    expect(template.health).toBe(hero.health);
  });