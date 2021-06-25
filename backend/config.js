const env = process.env;

const config = {
    db: {
        host: env.DB_HOST || 'freedb.tech',
        user: env.DB_USER || 'freedbtech_komminenivamsi',
        password: env.DB_PASSWORD || 'Vamsi@417',
        database: env.DB_NAME || 'freedbtech_InternProject',
        waitForConnections: true,
        connectionLimit: env.DB_CONN_LIMIT || 2,
        queueLimit: 0,
        debug: env.DB_DEBUG || false
    },
    listPerPage: env.listPerPage || 10
};

module.exports = config ;