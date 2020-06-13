import Sequelize, { Model } from 'sequelize';

class Url extends Model {
    static init(sequelize) {
        super.init(
            {
                url_redirect: Sequelize.STRING,
                code: Sequelize.STRING,
            },
            {
                sequelize,
                updatedAt: false,
            }
        );
    }
}

export default Url;
