import Sequelize, { Model } from 'sequelize';

class Url extends Model {
    static init(sequelize) {
        super.init(
            {
                id: Sequelize.INTEGER,
                url: Sequelize.STRING,
                url_redirect: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Url;
