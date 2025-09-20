export default {
    port: process.env.APP_PORT || 3000,
    ip: process.env.APP_IP || '0.0.0.0',
    postgres: {
        uri: process.env.POSTGRES_URL || 'postgresql://admin:secret@localhost:5432/polisportiva?schema=public'
    },
    jwt: { secret: process.env.JWT_SECRET || "jkl!±@£!@ghj1237", exp: process.env.JWT_EXP_DURATION || '1h'}
};