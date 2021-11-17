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

            type: DataTypes.STRING,
            allowNull: false
        } ,
        Productos_desc:{

            type: DataTypes.STRING,
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
        Productos_imgHome1:{

            type: DataTypes.STRING,
            allowNull: false
        },
        Productos_imgHome2:{

            type: DataTypes.STRING,
            allowNull: false
        },
        Productos_imgHome3:{

            type: DataTypes.STRING,
            allowNull: false
        },
        Productos_imgHome4:{

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