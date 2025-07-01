import process from "process";

export default function serverConfig(app, serverInit, dbPrismaConnect, config) {
    let isShuttingDown = false;

    function beforeShutdown() {
        return new Promise((resolve) => {
            setTimeout(resolve, 15000);
        });
    }

    async function closeServer() {
        return new Promise((resolve, reject) => {
            serverInit.close((err) => {
                if (err) return reject(err);
                resolve();
            });
        });
    }

    async function onShutdown() {
        await beforeShutdown();
        await closeServer();
        console.log('cleanup finished, server is shutting down');
    }

    async function onSignal(signal) {
        if (isShuttingDown) return;
        isShuttingDown = true;
        console.log('server is starting cleanup');
        console.log(`\nReceived ${signal}, shutting down gracefully...`);

        await onShutdown();

        // try {
        //     await dbPool.end();
        //     console.log('Database connection closed.');
        //     process.exit(0); // keluar dengan sukses
        // } catch (error) {
        //     console.error('Error during shutdown:', error);
        //     process.exit(1); // keluar dengan error
        // }
    }

    async function checkConnection() {
        try {
            await dbPrismaConnect.$connect();
            console.log('Database terhubung!');
        } catch (error) {
            throw error
        }
    }

    async function startServer() {
        serverInit.on('close', () => {
            console.log('Server closed successful');
        });
        process.on('SIGTERM', () => onSignal('SIGTERM'));
        process.on('SIGINT', () => onSignal('SIGINT'));
        process.on('unhandledRejection', (reason, promise) => {
            console.error('Unhandled Rejection at:', promise, 'reason:', reason);
        });
        process.on('uncaughtException', (err) => {
            console.error('Uncaught Exception thrown:', err);
            process.exit(1);
        });

        try {
            await checkConnection();
            await app.listen({ port: 3000, host: "0.0.0.0"})
        } catch (error) {
            throw error
        }
    }



    return { startServer };
}

