module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'urls',
            [
                {
                    url_redirect: 'www.google.com',
                    code: 'abaofk124f',
                    createdAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('url', null, {});
    },
};
