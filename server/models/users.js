"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasMany(models.posts);
      models.users.hasMany(models.post_likes);
      models.users.hasMany(models.post_comments);
      models.users.belongsToMany(models.users, {
        as: "subscriberId",
        through: "subscriptions",
      });
      models.users.belongsToMany(models.users, {
        as: "userId",
        through: "subscriptions",
      });
      // models.users.belongsToMany(models.subscriptions, {
      //   through: "subscriptions",
      // });
      //models.users.hasMany(models.post_comments);
      // models.users.hasMany(models.post_likes);
    }
  }
  users.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
