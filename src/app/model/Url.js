import Sequelize, { Model } from 'sequelize';

class Url extends Model {
    static init(sequelize) {
        super.init(
            {
                urlRedirect: Sequelize.STRING,
                code: Sequelize.STRING,
            },
            {
                sequelize,
                updatedAt: false,
                underscored: true,
            }
        );
    }
}

export default Url;
