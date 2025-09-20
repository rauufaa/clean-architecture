export default class SportsFacility{
    constructor({
        id,
        
        name,
        totalSportsFields,
        
        phone,
        userId = null,
        addressId=null,
    }) {
        this._id = id;
        this._userId = userId;
        this._name = name; 
        this._totalSportsFields = totalSportsFields;
        this._addressId = addressId;
        this._phone = phone;
    }

    getId() {
        return this._id
    }

    getUserId() {
        return this._userId
    }

    getName() {
        return this._name
    }

    getTotalSportsFields() {
        return this._totalSportsFields
    }

    getAddressId() {
        return this._addressId
    }

    getPhone() {
        return this._phone
    }
}