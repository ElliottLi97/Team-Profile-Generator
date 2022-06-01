const { number } = require('yargs');
const Manager = require('../lib/Manager')

test('creating manager object',() => {
    const manager = new Manager ("Elliott", 21, 'elliottli.job@gmail.com', 66);

    expect(manager.officeNumber).toEqual(expect.any(Number))
})


test('manager.getRole returns any string',() => {
    const manager = new Manager ("Elliott", 21, 'elliottli.job@gmail.com', 66);

    expect(manager.getRole()).toEqual("Manager")
})