const Employee = require('../lib/Employee');

test('create new employee.', () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe('object');
})

test('Name.', () => {
    const name = 'Myleen';
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})
test('Id.', () => {
    const id = 1234;
    const employeeInstance = new Employee('Myleen', 1234);
    expect(employeeInstance.id).toBe(id);
})

test('email', () => {
    const email = 'Myleen.santana12@icloud.com';
    const employeeInstance = new Employee('Myleen', 1234, email);
    expect(employeeInstance.email).toBe(email);
})




test('getName', () => {
    const testName = 'Myleen';
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})
test('getId method', () => {
    const testId = '1234';
    const employeeInstance = new Employee('Myleen', testId);
    expect(employeeInstance.getId()).toBe(id);
})
test('getEmail method', () => {
    const testEmail = 'Myleen.santana12@icloud.com';
    const employeeInstance = new Employee('Myleen', 1234, testEmail);
    expect(employeeInstance.getEmail()).toBe(email);
})

test('testing Role.', () => {
    const returnValue = 'Employee';
    const employeeInstance = new Employee('Myleen', 1234, 'Myleen.santana12@icloud.com');
    expect(employeeInstance.getRole()).toBe(returnValue);
})