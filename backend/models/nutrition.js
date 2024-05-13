module.exports = (sequelize, DataTypes) => {
    const Nutrition = sequelize.define('Nutrition', {
      itemName: DataTypes.STRING,
      calories: DataTypes.INTEGER,
      protein: DataTypes.INTEGER,
      carbohydrates: DataTypes.INTEGER,
      fats: DataTypes.INTEGER,
      userId: DataTypes.INTEGER, // Add userId column
    });
  
    return Nutrition;
  };
  