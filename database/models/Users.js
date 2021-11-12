module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
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
        Usuario_pais:{
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
        Productos_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }
        
const Users = sequelize.define(alias, cols, config)
Users.associate = function(models){
    Users.hasMany(models.Producto,{
        as : "productos",
        foreingKey: "Productos_id"
})
}

    return Users;
}