
const Enemy = require('../lib/Enemy')

const Potion = require('../lib/Potion')
jest.mock('../lib/Potion')

console.log(new Enemy, new Potion)

test('checks for enemy object', () => {
    const enemy = new Enemy('goblin', 'sword')

    expect(enemy.name).toBe('goblin')
    expect(enemy.weapon).toBe('sword')

    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object))
})

test('gets enemy Health Value', () => {
    const enemy = new Enemy('goblin');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()))
})

test('checks to see if enemy is still alive or not', () => {
    const enemy = new Enemy('goblin');

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0

    expect(enemy.isAlive()).toBeFalsy()
})

test('subtracts from enemy health', () => {
    const enemy = new Enemy('goblin')
    const oldHealth = enemy.health

    enemy.reduceHealth(5)

    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999)

    expect(enemy.health).toBe(0);
})

test('get enemys attack value', () => {
    const enemy = new Enemy('goblin');
    enemy.strength = 10

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15)
})

test('checks for enemys discription', () => {
    const enemy = new Enemy('goblin', 'sword')

    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
})