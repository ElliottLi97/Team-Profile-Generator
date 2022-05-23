

test('creating Engineer object',() => {
    const engineer = new Engineer (Elliott, 21, 'elliottli.job@gmail.com', 'elliottli97');

    expect(engineer.github).toEqual(expect.any(String))
})

test('engineer.getGithub returns any string',() => {
    const engineer = new Engineer (Elliott, 21, 'elliottli.job@gmail.com', 'elliottli97');

    expect(engineer.getGithub).toEqual(expect.any(String))
})

test('engineer.getRole returns any string',() => {
    const engineer = new Engineer (Elliott, 21, 'elliottli.job@gmail.com', 'elliottli97');

    expect(engineer.getRole).toEqual("Engineer")
})