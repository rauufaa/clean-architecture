export function reservationRating({
    id,
    rating,
    description,
    reservationId,
}) {
    return {
        getId: () => id,
        getRating: () => rating,
        getDescription: () => description,
        getReservationId: ()=> reservationId
    };
}

export default class ReservationRating {
    constructor({ id, rating=null, description=null, reservationId=null }) {
      this._id = id;
      this._rating = rating;
      this._description = description;
      this._reservationId = reservationId;
    }
  
    getId() {
      return this._id;
    }
  
    getRating() {
      return this._rating;
    }
  
    getDescription() {
      return this._description;
    }
  
    getReservationId() {
      return this._reservationId;
    }
  
    // Optional: validasi rating (misalnya 1–5)
    isValidRating() {
      return typeof this._rating === 'number' && this._rating >= 1 && this._rating <= 5;
    }
  }
  