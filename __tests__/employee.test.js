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
//change test title to match this one
test('employee.getName will return correct name',() => {
    const employee = new Employee (SAMPLENAME, SAMPLEID, SAMPLEEMAIL);

    expect(employee.getName()).toEqual(SAMPLENAME)
})

test('employee.getId will return any number',() => {
    const employee = new Employee (SAMPLENAME, SAMPLEID, SAMPLEEMAIL);

    expect(employee.getId()).toEqual(SAMPLEID)
})

test('employee.getEmail will return any string',() => {
    const employee = new Employee (SAMPLENAME, SAMPLEID, SAMPLEEMAIL);

    expect(employee.getEmail()).toEqual(SAMPLEEMAIL)
})

test('employee.role will return "Employee"',() => {
    const employee = new Employee (SAMPLENAME, SAMPLEID, SAMPLEEMAIL);

    expect(employee.getRole()).toEqual("Employee")
})

// test('create employee will fail with validation exception when Id is non-numeric',() => {
//     expect(() => {new Employee (SAMPLENAME, "A", SAMPLEEMAIL)}).toThrow(TypeError);
// })
// test('create employee will fail with validation exception when email is not formatted correctly',() => {
//     expect(() => {new Employee (SAMPLENAME, 1, 'elliottli.jobgmail.com')}).toThrow(TypeError);
// })
// test('create employee will fail with validation exception when name contains invalid characters',() => {
//     expect(() => {new Employee ("@@@@@@", "A", SAMPLEEMAIL)}).toThrow(TypeError);
// })
