

test('creating employee object',() => {
    const employee = new Employee (Elliott, 21, 'elliottli.job@gmail.com');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})

test('employee.getName will return any string',() => {
    const employee = new Employee (Elliott, 21, 'elliottli.job@gmail.com');

    expect(employee.getName).toEqual(expect.any(String))
})

test('employee.getId will return any number',() => {
    const employee = new Employee (Elliott, 21, 'elliottli.job@gmail.com');

    expect(employee.getId).toEqual(expect.any(Number))
})

test('employee.getEmail will return any string',() => {
    const employee = new Employee (Elliott, 21, 'elliottli.job@gmail.com');

    expect(employee.getEmail).toEqual(expect.any(String))
})

test('employee.role will return "Employee"',() => {
    const employee = new Employee (Elliott, 21, 'elliottli.job@gmail.com');

    expect(employee.getRole).toEqual("Employee")
})