module.exports = (sequelize, DataTypes) => {

    let alias = 'Productos';
    let cols = {
        Productos_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        } ,
        Usuario_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        } ,
        Productos_date:{

            type: DataTypes.DATE,
            allowNull: false
        } ,
        Productos_descuento:{
            type: DataTypes.INTEGER,
            allowNull: false
        } ,
        Productos_nombre:{

            type: DataTypes.STRING,
            allowNull: false
        } ,
        Productos_precio:{

            type: DataTypes.INTEGER,
            allowNull: false
        } ,
        Productos_img:{

            type: DataTypes.STRING,
            allowNull: false
        } ,
    };
    let config = {
        tableName: "Productos",
        timestamps: false
    }
        
const Usuario = sequelize.define(alias, cols, config)

    return Usuario;
}