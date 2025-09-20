const dataProducts = [
    {
        code: "S10_1678",
        name: "1969 Harley Davidson Ultimate Chopper",
        line: "Motorcycles",
        scale: "1:10",
        vendor: "Min Lin Diecast",
        description: "This replica features working kickstand, front suspension, gear-shift lever, footbrake lever, drive chain, wheels and steering. All parts are particularly delicate due to their precise scale and require special care and attention.",
        stock: 7933,
        buyPrice: 48.81,
        retailPrice: 95.70,
    },
    {
        code: "S10_1678",
        name: "1969 Harley Davidson Ultimate Chopper",
        line: "Motorcycles",
        scale: "1:10",
        vendor: "Min Lin Diecast",
        description: "This replica features working kickstand, front suspension, gear-shift lever, footbrake lever, drive chain, wheels and steering. All parts are particularly delicate due to their precise scale and require special care and attention.",
        stock: 7933,
        buyPrice: 48.81,
        retailPrice: 95.70,
    },
]

export default function productRepositoryHardcode() {
    const findAll = (params) => {
        return dataProducts
    }

    const find = (code) => {
        return dataProducts.find((element)=>element.code===code)
    }

    const update = (code, data) => {
        const dataIndex = dataProducts.findIndex((element)=>element.code===code)
        data.name && (dataProducts[dataIndex].name == data.name);
        data.line && (dataProducts[dataIndex].line == data.line);
        data.scale && (dataProducts[dataIndex].scale == data.scale);
        data.vendor && (dataProducts[dataIndex].vendor == data.vendor);
        data.description && (dataProducts[dataIndex].description == data.description);
        data.stock && (dataProducts[dataIndex].stock == data.stock);
        data.buyPrice && (dataProducts[dataIndex].buyPrice == data.buyPrice);
        data.retailPrice && (dataProducts[dataIndex].retailPrice == data.retailPrice);
    }

    const deleteProduct = (code) => {
        const dataIndex = dataProducts.findIndex((element)=>element.code===code)
        const productDelete = dataProducts.splice(dataIndex, 1);
    }

    return {
        findAll,
        find,
        update,
        deleteProduct
        
    }
}