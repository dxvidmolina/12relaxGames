module.exports = (sequelize, DataTypes) => {
    let alias = 'Users';
    let cols = {
        Usuario_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Usuario_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Usuario_nickname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Usuario_país:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Usuario_email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Usuario_edad:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Usuario_password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Productos_id_fk:{
            type: DataTypes.INT,
            type: DataTypes.FOREIGNKEY,
        }
    };
    let config = {
        tableName: "movies",
        timestamps: false
    }
        
const Users = sequelize.define(alias, cols, config)

    return Users;
}