module.exports = (sequelize, DataTypes) => {

    let alias = 'Genres';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    
}
    let config = {
        tableName: 'genres',
        timestamps: false
    }

const Genre = sequelize.define(alias, cols, config)

    return Genre;
}