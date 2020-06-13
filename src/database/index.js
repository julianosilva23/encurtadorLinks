import Sequelize from 'sequelize';

import Url from '../app/model/Url';

import databaseConfig from '../config/database';

const models = [Url];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection));
    }
}

export default new Database();
