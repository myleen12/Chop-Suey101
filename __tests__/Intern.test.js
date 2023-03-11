const Intern = require('../lib/intern');

test('Creating school', () => {
    const testSchool = 'School Name';
    const employeeInstance = new Intern('Myleen', 1234, 'Myleen.santana12@icloud.com', testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});
test('testing officenumber.', () => {
    const returnValue = 'School Name';
    const employeeInstance = new Intern('Myleen', 1234, 'Myleen.santana12@icloud.com', testSchool);
    expect(employeeInstance.getSchool()).toBe(returnValue);
});
test('testing Role.', () => {
    const returnValue = 'Intern';
    const employeeInstance = new Intern('Myleen', 1234, 'Myleen.santana12@icloud.com', 'School Name');
    expect(employeeInstance.getRole()).toBe(returnValue);
});