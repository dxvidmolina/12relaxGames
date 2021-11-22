module.exports = (sequelize, DataTypes) => {

    let alias = 'Imgref';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        imgref:{
            type: DataTypes.STRING(100),
            allowNull: false
        }

}
    let config = {
        tableName: 'imgref',
        timestamps: false
    }

const Imgref = sequelize.define(alias, cols, config)

    return Imgref;
}