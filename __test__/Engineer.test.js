const Engineer = require('../lib/Engineer');
let newEngineer = new Engineer('Emma', 3, 'emma@hotmail.com', 'CoolGitName');

test('test get name using getName()', () => {
    expect(newEngineer.getName()).toBe('Emma')
})

test('test get id using getId()', () => {
    expect(newEngineer.getId()).toBe(3)
})

test('test get email using getEmail()', () => {
    expect(newEngineer.getEmail()).toBe('emma@hotmail.com')
})

test('test get github using getGithub()', () => {
    expect(newEngineer.getGithub()).toBe('CoolGitName')
})

test('test get role using getRole()', () => {
    expect(newEngineer.getRole()).toBe('Engineer')

})