const Engineer = require('../lib/Engineer');

test('create Github', () => {
    const testGithub = 'Myleen12';
    const employeeInstance = new Engineer('Myleen', 1234, 'Myleen.santana12@icloud.com', testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});
test('testing Github', () => {
    const testGithub = 'Myleen12';
    const employeeInstance = new Engineer('Myleen', 1234, 'Myleen.santana12@icloud.com', testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});
test('Testing role.', () => {
    const returnValue = 'Myleen12';
    const employeeInstance = new Engineer('Myleen', 1234, 'Myleen.santana12@icloud.com', 'Myleen12');
    expect(employeeInstance.getRole()).toBe(returnValue);
});

