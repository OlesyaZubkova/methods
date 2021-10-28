import Character from '../character';

  test('should check name', () => {
    expect(() => new Character('Z', 'Zombie')).toThrow(new Error('Неверный формат имени!'));
  });

  test('should check type', () => {
    expect(() => new Character('Undead', 'WrongType')).toThrow(new Error('Неверный формат типа!'));
  });

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
      hero.health = -11;
      hero.damage(14);
    }).toThrow(new Error('Показатель здоровья на нуле!'));
  });