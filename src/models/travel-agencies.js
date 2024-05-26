"use strict";
const dataTypes = require("sequelize/lib/dialects/postgres/data-types");
var DataTypes = require("../../node_modules/sequelize/lib/data-types");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Travel_agency extends Model {
    static associate(models) {}
  }
  Travel_agency.init(
    {
      id_agency: DataTypes.INTEGER,
      name_vi: DataTypes.STRING,
      name_en: DataTypes.STRING,
      license_number: DataTypes.STRING,
      web: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      email: DataTypes.STRING,
      address_agency: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Travel_agency",
    }
  );
  return Travel_agency;
};
