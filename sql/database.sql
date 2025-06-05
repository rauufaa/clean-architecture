CREATE TABLE products(
    code VARCHAR(8) PRIMARY KEY,
    name VARCHAR(255),
    line VARCHAR(100),
    scale VARCHAR(10),
    vendor VARCHAR(50),
    description VARCHAR(255),
    stock INT,
    buyPrice FLOAT, 
    retailPrice FLOAT
)


code: "S10_1678",
    name: "1969 Harley Davidson Ultimate Chopper",
    line: "Motorcycles",
    scale: "1:10",
    vendor: "Min Lin Diecast",
    description: "This replica features working kickstand, front suspension, gear-shift lever, footbrake lever, drive chain, wheels and steering. All parts are particularly delicate due to their precise scale and require special care and attention.",
    stock: 7933,
    buyPrice: 48.81,
    retailPrice: 95.70,

INSERT INTO products (code, name, line, scale, vendor, description, stock, buyPrice, retailPrice) VALUES (
    'S10_1678',
    '1969 Harley Davidson Ultimate Chopper',
    'Motorcycles',
    '1:10',
    'Min Lin Diecast',
    'This replica features working kickstand, front suspension, gear-shift lever, footbrake lever, drive chain, wheels and steering. All parts are particularly delicate due to their precise scale and require special care and attention.',
    7933,
    48.81,
    95.70
)