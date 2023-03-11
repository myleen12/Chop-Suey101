const Manager = require('../lib/Manager');

test('creating officenumber.', () => {
    const testOfficeNumber = 1234;
    const employeeInstance = new Manager('Myleen', 1234, 'Myleen.santana12@icloud.com', testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});
test('testing officenumber.', () => {
    const testOfficeNumber = 1234;
    const employeeInstance = new Manager('Myleen', 1234, 'Myleen.santana12@icloud.com', testOfficeNumber);
    expect(employeeInstance.officeNumber()).toBe(testOfficeNumber);
});
test('test Role.', () => {
    const returnValue = 'Manager';
    const employeeInstance = new Manager('Myleen', 1234, 'Myleen.santana12@icloud.com', 1234);
    expect(employeeInstance.getRole()).toBe(returnValue);
});