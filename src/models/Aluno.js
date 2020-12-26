import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type:Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Campo nome precisa ter entre 3 a 255 caracteres'
                    },
                },
            },
            sobrenome: {
                type:Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Campo sobrenome precisa ter entre 3 a 255 caracteres'
                    },
                },
            },
            email: {
                type:Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail existente'
                },
                validate: {
                    isEmail: {
                        msg: 'Invalid email'
                    },
                },
            },
            idade: {
                type:Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: 'Campo idade precisa ser um número inteiro'
                    },
                },
            },
            peso: {
                type:Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Campo peso precisa ser um número inteiro ou float.'
                    },
                },
            },
            altura: {
                type:Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Campo altura precisa ser um número inteiro ou float.'
                    }
                },
            },

        }, {
            sequelize,

        });
        return this;
    }

    static associate(models) {
        this.hasMany(models.Foto, { foreignKey: 'aluno_id'});
    }

}