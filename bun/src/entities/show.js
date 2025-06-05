export default function show({
    showId,
    type,
    title,
    director,
    castMembers,
    country,
    dateAdded,
    releaseYear,
    rating,
    duration,
    listedIn,
    description
}) {
    return {
        getShowId: () => showId,
        getType: () => type,
        getTitle: () => title,
        getDirector: () => director,
        getCastMembers: () => castMembers,
        getCountry: () => country,
        getDateAdded: () => dateAdded,
        getReleaseYear: () => releaseYear,
        getRating: () => rating,
        getDuration: () => duration,
        getListedIn: () => listedIn,
        getDescription: () => description,
    };
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