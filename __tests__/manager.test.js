

test('creating manager object',() => {
    const manager = new Manager (Elliott, 21, 'elliottli.job@gmail.com', 66);

    expect(manager.officeNumber).toEqual(expect.any(String))
})


test('manager.getRole returns any string',() => {
    const manager = new manager (Elliott, 21, 'elliottli.job@gmail.com', 66);

    expect(manager.getRole).toEqual("Manager")
})