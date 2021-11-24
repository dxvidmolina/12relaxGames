module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name:{
            type: DataTypes.STRING(20),
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nickname:{
            type: DataTypes.STRING(15),
            allowNull: false
        },
        pais:{
            type: DataTypes.STRING(15),
            allowNull: false
        },
        edad:{
            type: DataTypes.INTEGER(2),
            allowNull: false
        },
        img:{
            type: DataTypes.STRING(100),
            allowNull: false
        }

    }
    let config = {
        tableName: 'users',
        timestamps: false
    }

const User = sequelize.define(alias, cols, config)


    return User;
}