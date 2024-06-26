module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    totalWeightLifted: { type: DataTypes.DOUBLE, defaultValue: '0' },
  }, {
    classMethods: {
      associate: (models) => {
        // an user can be a member of several groups
        User.belongsToMany(models.Group, { through: 'UserGroup' });

        // an user can have multiple exercises
        User.hasMany(models.Exercise);
      },
    },
  });

  return User;
};
