const Manager = require('../lib/Manager');
let newManager = new Manager('Bishop', 5, 'bishoplee@aol.com', 126);

test('test get name using getName()', () => {
    expect(newManager.getName()).toBe('Bishop')
})

test('test get id using getId()', () => {
    expect(newManager.getId()).toBe(5)
})

test('test get email using getEmail()', () => {
    expect(newManager.getEmail()).toBe('bishoplee@aol.com')
})

test('test get officeNumber using getOfficeNumber()', () => {
    expect(newManager.getOfficeNumber()).toBe(126)
})

//TODO
test('test get role using getRole()', () => {

})