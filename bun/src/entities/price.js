export function price({
    id,
    pricePerHour
}) {
    return {
        getId: ()=> id,
        getPricePerHour: () => pricePerHour
    }
}

export default class Price {
    constructor({ id, pricePerHour=null }) {
      this._id = id;
      this._pricePerHour = pricePerHour;
    }
  
    getId() {
      return this._id;
    }
  
    getPricePerHour() {
      return this._pricePerHour;
    }
  
    // Optional: kalkulasi total harga berdasarkan durasi (jam)
    calculateTotal(hours) {
      if (typeof hours !== 'number' || hours <= 0) {
        throw new Error('Durasi harus berupa angka positif');
      }
      return this._pricePerHour * hours;
    }
  }
  