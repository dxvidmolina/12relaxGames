module.exports = (sequelize, DataTypes) => {

    let alias = 'Producto';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name:{
            type: DataTypes.INTEGER(20),
            allowNull: false 
        },
        price:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        description:{
            type: DataTypes.STRING(480),
            allowNull: false
        },
        discount:{
            type: DataTypes.INTEGER(20)
        },
        genre_id:{
            type: DataTypes.INTEGER
        },
        imgref:{
            type: DataTypes.INTEGER
        }

    }
    let config = {
        tableName: 'productos',
        timestamps: false
    }
const Producto = sequelize.define(alias, cols, config)

    return Producto;
}