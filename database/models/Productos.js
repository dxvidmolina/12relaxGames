module.exports = (sequelize, DataTypes) => {

    let alias = 'Producto';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
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
        Detalle_producto:{

            type: DataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false
    }
        
const Producto = sequelize.define(alias, cols, config)

    return Producto;
}