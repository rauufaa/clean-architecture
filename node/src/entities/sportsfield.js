export function sportsField({
    id,
    sportsFacilityId,
    name,
    sport,
    isIndoor,
    ownerId = null,
    priceListId,
    soccerFieldType = null,
    tennisFieldType = null
}) {
    return {
        getId: () => id,
        getSportsFacilityId: () => sportsFacilityId,
        getName: () => name,
        getSport: () => sport,
        getIsIndoor: () => isIndoor,
        getOwnerId: () => ownerId,
        getPriceListId: () => priceListId,
        getSoccerFieldType: () => soccerFieldType,
        getTennisFieldType: () => tennisFieldType,
    };
}

export default class SportsField {
    constructor({
      id,
      
      name,
      sport,
      isIndoor,
      
      
      soccerFieldType="",
      tennisFieldType="",
      priceListId=null,
      userId=null,
      sportsFacilityId=null,
    }) {
      this._id = id;
      this._sportsFacilityId = sportsFacilityId;
      this._name = name;
      this._sport = sport;
      this._isIndoor = isIndoor;
      this._userId = userId;
      this._priceListId = priceListId;
      this._soccerFieldType = soccerFieldType;
      this._tennisFieldType = tennisFieldType;
    }
  
    getId() {
      return this._id;
    }
  
    getSportsFacilityId() {
      return this._sportsFacilityId;
    }
  
    getName() {
      return this._name;
    }
  
    getSport() {
      return this._sport;
    }
  
    getIsIndoor() {
      return this._isIndoor;
    }
  
    getUserId() {
      return this._userId;
    }
  
    getPriceListId() {
      return this._priceListId;
    }
  
    getSoccerFieldType() {
      return this._soccerFieldType;
    }
  
    getTennisFieldType() {
      return this._tennisFieldType;
    }
  }
  