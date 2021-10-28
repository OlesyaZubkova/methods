import Bowerman from '../bowerman';

  test('should show levelUp of Bowerman class correctly', () => {
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

  test('should show damage of Bowerman class correctly', () => {
    const template = {
      health: 96.25,
    };
    const hero = new Bowerman('Bowerman');
    hero.damage(5);
    expect(template.health).toBe(hero.health);
  });