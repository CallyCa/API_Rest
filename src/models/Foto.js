import Sequelize, { Model } from 'sequelize';
import appcConfig from '../config/appConfig';

export default class Foto extends Model {
    static init(sequelize) {
        super.init({
            originalname: {
                type:Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'The Field cannot be empty'
                    },
                },
            },
            filename: {
                type:Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'The Field cannot be empty'
                    },
                },
            },
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `${appcConfig.url}/images/${this.getDataValue('filename')}`;
                }
            }
        }, {
            sequelize,
            tableName: 'fotos',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' })
    }

}