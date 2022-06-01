const Engineer = require('../lib/Engineer')

const SAMPLENAME = "Elliott"
const SAMPLEEMAIL = 'elliottli.job@gmail.com'
const SAMPLEID = 21
const SAMPLEGITHUB = 'elliottli97'

test("Engineer object is created successfully",() => {
    const engineer = new Engineer (SAMPLENAME, SAMPLEID, SAMPLEEMAIL, SAMPLEGITHUB);

    expect(engineer.github).toEqual(SAMPLEGITHUB)
})

test('engineer.getGithub returns any string',() => {
    const engineer = new Engineer (SAMPLENAME, SAMPLEID, SAMPLEEMAIL, SAMPLEGITHUB);

    expect(engineer.getGithub()).toEqual(SAMPLEGITHUB)
})

test('engineer.getRole returns any string',() => {
    const engineer = new Engineer (SAMPLENAME, SAMPLEID, SAMPLEEMAIL, SAMPLEGITHUB);

    expect(engineer.getRole()).toEqual("Engineer")
})