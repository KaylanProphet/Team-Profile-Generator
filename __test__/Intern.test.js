const Intern = require('../lib/Intern');
const employeeName = 'Kaylan'
const employeeId = 25
const employeeEmail = 'kaylan@gmail.com'
const employeeSchool = 'UNC'
const newIntern = new Intern(employeeName, employeeId, employeeEmail, employeeSchool);

test('test get name using getName()', () => {
    expect(newIntern.getName()).toBe(employeeName)
})

test('test get id using getId()', () => {
    expect(newIntern.getId()).toBe(employeeId)
})

test('test get email using getEmail()', () => {
    expect(newIntern.getEmail()).toBe(employeeEmail)
})

test('test get school using getSchool()', () => {
    expect(newIntern.getSchool()).toBe(employeeSchool)
})

test('test get role using getRole()', () => {
    expect(newIntern.getRole()).toBe('Intern')
})

