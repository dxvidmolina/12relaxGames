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
        imgref2:{
            type: DataTypes.STRING(100),
            allowNull: false
        },imgref3:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        imgref4:{
            type: DataTypes.STRING(100),
            allowNull: false
        }

}
    let config = {
        tableName: 'imgrefs',
        timestamps: false
    }

const Imgref = sequelize.define(alias, cols, config)

Imgref.associate = function(models){
    Imgref.hasOne(models.Productos, {
        as: "productos",
        foreignKey: "imgref_id"
    })
}
    return Imgref;
}