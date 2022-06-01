const Employee = require('../lib/Employee')

const SAMPLENAME = "Elliott"
const SAMPLEEMAIL = "elliottli.job@gmail.com"
const SAMPLEID = 11
test('Employee object is created successfully',() => {
    const employee = new Employee (SAMPLENAME, SAMPLEID, SAMPLEEMAIL);

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})

test('employee.getName will return correct name',() => {
    const employee = new Employee (SAMPLENAME, SAMPLEID, SAMPLEEMAIL);

    expect(employee.getName()).toEqual(SAMPLENAME)
})

test('employee.getId will return the correct number',() => {
    const employee = new Employee (SAMPLENAME, SAMPLEID, SAMPLEEMAIL);

    expect(employee.getId()).toEqual(SAMPLEID)
})

test('employee.getEmail will return the correct email',() => {
    const employee = new Employee (SAMPLENAME, SAMPLEID, SAMPLEEMAIL);

    expect(employee.getEmail()).toEqual(SAMPLEEMAIL)
})

test('employee.role will return "Employee"',() => {
    const employee = new Employee (SAMPLENAME, SAMPLEID, SAMPLEEMAIL);

    expect(employee.getRole()).toEqual("Employee")
})

