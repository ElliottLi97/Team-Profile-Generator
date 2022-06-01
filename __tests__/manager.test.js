const Manager = require('../lib/Manager')

const SAMPLENAME = "Elliott"
const SAMPLEEMAIL = 'elliottli.job@gmail.com'
const SAMPLEID = 21
const SAMPLEOFFICENUMBER = 'UCB'

test('Manger object is created successfully',() => {
    const manager = new Manager (SAMPLENAME, SAMPLEID, SAMPLEEMAIL, SAMPLEOFFICENUMBER);

    expect(manager.officeNumber).toEqual(SAMPLEOFFICENUMBER)
})


test('manager.getRole returns "Manager"',() => {
    const manager = new Manager (SAMPLENAME, SAMPLEID, SAMPLEEMAIL, SAMPLEOFFICENUMBER);

    expect(manager.getRole()).toEqual("Manager")
})