const allTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Неверный формат имени!');
    }

    if (!allTypes.includes(type)) {
      throw new Error('Неверный формат типа!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Показатель здоровья на нуле!');
    }

    const attackScore = this.attack / 100 * 20;
    const defenceScore = this.defence / 100 * 20;

    this.level += 1;
    this.attack += attackScore;
    this.defence += defenceScore;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Показатель здоровья на нуле!');
    }
  }
}
