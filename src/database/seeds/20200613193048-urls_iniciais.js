module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'url',
            [
                {
                    url: 'www.google.com',
                    code: 'fdjfidj',
                    created_at: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('url', null, {});
    },
};
