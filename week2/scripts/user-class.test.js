const { describe, expect, test } = require('@jest/globals');
const { User, Admin } = require('./user.js');



describe('User Class with Inheritance', () => {
  test('Creating Object sucesfully' , () => {
    let user  = new User("Mai" ,1, 23);
    expect(user.Fullname).toBe('May');  
    expect(user.age).toBe(23);          
    expect(user.id).toBe(1); 
  });
  test('should update user profile correctly', () => {
    const user = new User('Mai', 1, 23);
    user.updateProfile(2, 'May', 24);
    expect(user.Fullname).toBe('May');
    expect(user.age).toBe(24);
    expect(user.id).toBe(2);
  });

  test('should increase static count for each new user', () => {
    const countBefore = User.count;
    new User('Sara', 3, 22);
    expect(User.count).toBe(countBefore + 1);
  });

  test('should return correct login/logout messages', () => {
    const user = new User('May', 1, 23);
    expect(user.login()).toBe('{this.name} is loggedIn');   
    expect(user.logout()).toBe('{this.name} is logged Out');
  });
});


describe('Admin Class (Inheritance)', () => {

  test('should inherit from User and add permission', () => {
    const admin = new Admin('Sami', 110, 30, 1);
    expect(admin.Fullname).toBe('Sami');
    expect(admin.age).toBe(30);
    expect(admin.permession).toBe(1);
  });

  test('should allow changing permission via setter', () => {
    const admin = new Admin('Sami', 110, 30, 1);
    admin.permession = 2;
    expect(admin.permession).toBe(2);
  });

  test('should inherit static count from User', () => {
   // expect(Admin.count).toBeGreaterThan(0);
  });
});
;