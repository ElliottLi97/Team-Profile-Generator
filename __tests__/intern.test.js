const Intern = require('../lib/intern')

test('creating intern object',() => {
    const intern = new Intern ("Elliott", 21, 'elliottli.job@gmail.com', 'UCB');

    expect(intern.school).toEqual(expect.any(String))
})

test('intern.getGithub returns any string',() => {
    const intern = new Intern ("Elliott", 21, 'elliottli.job@gmail.com', 'UCB');

    expect(intern.getSchool()).toEqual(expect.any(String))
})

test('intern.getRole returns any string',() => {
    const intern = new Intern ("Elliott", 21, 'elliottli.job@gmail.com', 'UCB');

    expect(intern.getRole()).toEqual("Intern")
})