export function user({
    id,
    username,
    password,
    addressId,
    email,
    firstName,
    lastName,
    fiscalCode,
}) {
    return {
        getId: () => id,
        getUsername: () => username,
        getPassword: () => password,
        getAddressId: () => addressId,
        getEmail: () => email,
        getFirstName: () => firstName,
        getLastName: () => lastName,
        getFiscalCode: () => fiscalCode
    }
}

export default class User {
    constructor({ id, username, password, email, firstName, lastName, fiscalCode, addressId=null }) {
      this._id = id;
      this._username = username;
      this._password = password;
      this._addressId = addressId;
      this._email = email;
      this._firstName = firstName;
      this._lastName = lastName;
      this._fiscalCode = fiscalCode;
    }
  
    getId() {
      return this._id;
    }
  
    getUsername() {
      return this._username;
    }
  
    getPassword() {
      return this._password;
    }
  
    getAddressId() {
      return this._addressId;
    }
  
    getEmail() {
      return this._email;
    }
  
    getFirstName() {
      return this._firstName;
    }
  
    getLastName() {
      return this._lastName;
    }
  
    getFiscalCode() {
      return this._fiscalCode;
    }
  }
  