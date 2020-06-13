module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'wiser',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
