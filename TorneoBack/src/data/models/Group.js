const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Group", {
    groupName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
