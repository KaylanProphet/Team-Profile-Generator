const Employee = require('../lib/Employee');
const employeeName = 'joe'
//new object instance or version of it
let newEmployee = new Employee(employeeName, 23, 'joe@gmail.com');


test('test get name using getName()', () => {
    expect(newEmployee.getName()).toBe(employeeName)
})

test('test get name using .name', () => {
    expect(newEmployee.name).toBe()
})

test('test get id using getId()', () => {
    expect(newEmployee.getId()).toBe(23)
})

test('test get email using getEmail()', () => {
    expect(newEmployee.getEmail()).toBe('joe@gmail.com')
})

test('test get role using getRole()', () => {
    expect(newEmployee.getRole()).toBe('Employee')
})