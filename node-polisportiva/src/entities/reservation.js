import reservationStatus from "./reservation-status.js";

export function reservation({
    id,
    sportsFieldId,
    ownerId,
    startDate,
    endDate,
    createdAt,
    state = reservationStatus.PENDING,
    price = 0
}) {
    return {
        getId: () => id,
        getSportsFieldId: () => sportsFieldId,
        getOwnerId: () => ownerId,
        getStartDate: () => startDate,
        getEndDate: () => endDate,
        getCreatedAt: () => createdAt,
        getState: () => state,
        getPrice: () => price,
    };
}

// import { reservationStatus } from './reservationStatus.js'; // pastikan enum ini tersedia

export default class Reservation {
  constructor({
    id,
    
    startDate,
    endDate,
    createdAt,
    state,
    price,
    userId=null,
    sportsFieldId=null,
    
  }) {
    this._id = id;
    this._sportsFieldId = sportsFieldId;
    this._userId = userId;
    this._startDate = startDate;
    this._endDate = endDate;
    this._createdAt = createdAt;
    this._state = state;
    this._price = price;
  }

  getId() {
    return this._id;
  }

  getSportsFieldId() {
    return this._sportsFieldId;
  }

  getUserId() {
    return this._userId;
  }

  getStartDate() {
    return this._startDate;
  }

  getEndDate() {
    return this._endDate;
  }

  getCreatedAt() {
    return this._createdAt;
  }

  getState() {
    return this._state;
  }

  getPrice() {
    return this._price;
  }

  // Optional: method untuk update status
  // updateState(newState) {
  //   if (!Object.values(reservationStatus).includes(newState)) {
  //     throw new Error(`Invalid reservation state: ${newState}`);
  //   }
  //   this._state = newState;
  // }
}


class Product {
    constructor(
        code,
        name,
        line,
        scale,
        vendor,
        description,
        stock,
        buyPrice,
        retailPrice,
    ) {
        this.code = code;
        this.name = name;
        this.line = line;
        this.scale = scale;
        this.vendor = vendor;
        this.description = description;
        this.stock = stock;
        this.buyPrice = buyPrice;
        this.retailPrice = retailPrice;
    }
    getCode() { return this.code }
    getName() { return this.name }
    getLine() { return this.line }
    getScale() { return this.scale }
    getVendor() { return this.vendor }
    getDescription() { return this.description }
    getStock() { return this.stock }
    getBuyPrice() { return this.buyPrice }
    getRetailPrice() { return this.retailPrice }
}