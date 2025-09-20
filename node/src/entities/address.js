export function address(
    {
        id,
        state,
        city,
        streetName,
        streetNumber,
        postcode,
    },
) {
    return {
        getId: () => id,
        getState: () => state,
        getCity: () => city,
        getStreetName: () => streetName,
        getStreetNumber: () => streetNumber,
        getPostcode: () => postcode
    }
}

export default class Address {
    constructor({ id, state=null, city=null, streetName=null, streetNumber=null, postcode=null }) {
      this._id = id;
      this._state = state;
      this._city = city;
      this._streetName = streetName;
      this._streetNumber = streetNumber;
      this._postcode = postcode;
    }
  
    getId() {
      return this._id;
    }
  
    getState() {
      return this._state;
    }
  
    getCity() {
      return this._city;
    }
  
    getStreetName() {
      return this._streetName;
    }
  
    getStreetNumber() {
      return this._streetNumber;
    }
  
    getPostcode() {
      return this._postcode;
    }
  
    // Optional: method untuk format alamat lengkap
    getFullAddress() {
      return `${this._streetName} ${this._streetNumber}, ${this._city}, ${this._state} ${this._postcode}`;
    }
  }
  