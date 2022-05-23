

test('creating intern object',() => {
    const intern = new Intern (Elliott, 21, 'elliottli.job@gmail.com', 'UCB');

    expect(intern.school).toEqual(expect.any(String))
})

test('intern.getSchool returns any string',() => {
    const intern = new intern (Elliott, 21, 'elliottli.job@gmail.com', 'UCB');

    expect(intern.getSchool).toEqual(expect.any(String))
})

test('intern.getRole returns any string',() => {
    const intern = new intern (Elliott, 21, 'elliottli.job@gmail.com', 'UCB');

    expect(intern.getRole).toEqual("Intern")
})