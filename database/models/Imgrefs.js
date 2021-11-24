module.exports = (sequelize, DataTypes) => {

    let alias = 'Imgref';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        imgref1:{
            type: DataTypes.STRING(100),
            allowNull: false
        },

}
    let config = {
        tableName: 'imgrefs',
        timestamps: false
    }

const Imgref = sequelize.define(alias, cols, config)

Imgref.associate = function(models){
    Imgref.belongsTo(models.Producto, {
        as: "Productos",
        foreignKey: "productos_id"
    })
}
    return Imgref;
}