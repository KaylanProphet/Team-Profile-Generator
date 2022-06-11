const Employee = require('../lib/Employee');
let newEmployee = new Employee('joe', 23, 'joe@mgail.com');

test('test get name using getName()', () => {
    expect(newEmployee.getName()).toBe('joe')
})