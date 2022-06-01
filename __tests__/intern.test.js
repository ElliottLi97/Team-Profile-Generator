const Intern = require('../lib/intern')

const SAMPLENAME = "Elliott"
const SAMPLEEMAIL = 'elliottli.job@gmail.com'
const SAMPLEID = 21
const SAMPLESCHOOL = 'UCB'

test('Intern object is created successfully',() => {
    const intern = new Intern (SAMPLENAME, SAMPLEID, SAMPLEEMAIL, SAMPLESCHOOL);

    expect(intern.school).toEqual(SAMPLESCHOOL)
})

test('intern.getGithub returns the correct school',() => {
    const intern = new Intern (SAMPLENAME, SAMPLEID, SAMPLEEMAIL, SAMPLESCHOOL);

    expect(intern.getSchool()).toEqual(SAMPLESCHOOL)
})

test('intern.getRole returns Intern',() => {
    const intern = new Intern (SAMPLENAME, SAMPLEID, SAMPLEEMAIL, SAMPLESCHOOL);

    expect(intern.getRole()).toEqual("Intern")
})