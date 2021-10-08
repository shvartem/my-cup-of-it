const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Technology, { through: 'Stacks', foreignKey: 'userId' });
      this.hasMany(models.Meet, { foreignKey: 'interviewerId' });
      this.hasMany(models.Meet, { foreignKey: 'mentorId' });
      this.belongsTo(models.Company, { foreignKey: 'companyId' });
    }
  }
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isMentor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    careerStart: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    companyId: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    userPhoto: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
