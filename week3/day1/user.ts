class User {
  //add decleration
  _name: string;
  _id: number;
  _age: number;
  constructor(name :string, id :number, age :number) {
    this._name = name;
    this._id = id;
    this._age = age;
    User.count += 1;
  }

  // Static variable decleration
  static  count:number = 0;
  //Private variable
  private privar:string= "This is private variable";

  //Static method
  /* static addage(age:number) {
    this._age += 1;
    return this._age;
  }
    */ 
  //Getters
  get Fullname() {
    return this._name;
  }

  get age() {
    return this._age;
  }
  get id() {
    return this._id;
  }

  //Setters

  set Fullname(name) {
    this._name = name;
  }

  set Age(age:number) {
    this._age = age;
  }
  set id(id:number) {
    this._id = id;
  }

  //Methods

  addLastName(last:string) {
    this._name = this._name + last;
  }
  login() {
    return "{this.name} is loggedIn";
  }

  logout() {
    return "{this.name} is logged Out";
  }
  updateProfile(id:number, name:string, age:number) {
    this._name = name;
    this._id = id;
    this._age = age;
  }
}
class Admin extends User {
  private _permession: number
  constructor(name:string, id:number, age:number, permession:number) {
    super(name, id, age);
    this._permession = permession;
  }

  //Getters & Setters
  get permession() {
    return this._permession;
  }

  set permession(perm) {
    this._permession = perm;
  }
}

//Creating Objects and testing inheritance & protectors

let userOne = new User("May", 1, 23);
console.log(userOne.login());
console.log(userOne.logout());
console.log(userOne.Fullname);
//Admin access
let admin = new Admin("Sami", 110, 30, 1);
admin.permession = 2;
console.log(admin.permession);
admin.addLastName("Talal");
console.log(admin._name);

//acess private methids and variables from outside User
// userOne.addage(21) //error because its a static method
// userOne.cout //error
console.log(User.count);
// console.log(User.#privar) Uncaught SyntaxError: Private field '#privar' must be declared in an enclosing class
// Acess from child
console.log(Admin.count); //can acess static methods and vars
// console.log(Admin.#privar) // can't acess from outside the class Private field '#privar' must be declared in an enclosing class

module.exports = { User, Admin };
