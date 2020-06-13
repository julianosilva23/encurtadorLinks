/**
 *
 * Criação da tabela de urls
 *
 * Como tamnho máximo aceitável para o encurtador de links foi utilizado as seguintes definições como base:
 * - Windows Microsft Explorer de 2048 para requisições GET/POST
 * - RFC 7230 - Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing
 *      https://tools.ietf.org/html/rfc7230#section-3.1.1
 *
 * @author Juliano Silva <julianoluizsilva00@gmail.com>
 *
 */

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('url', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            url: {
                type: Sequelize.STRING(2048),
                allowNull: false,
            },
            code: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('url');
    },
};
