const Employee = require('../lib/Employee');
let newEmployee = new Employee('joe', 23, 'joe@gmail.com');

test('test get name using getName()', () => {
    expect(newEmployee.getName()).toBe('joe')
})

test('test get id using getId()', () => {
    expect(newEmployee.getId()).toBe(23)
})

test('test get email using getEmail()', () => {
    expect(newEmployee.getEmail()).toBe('joe@gmail.com')
})

//TODO
test('test get role using getRole()', () => {
    expect(Employee.getRole()).toBe('Employee')
})