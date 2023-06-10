import { DataTypes } from "sequelize";
import sequelize from "../config/config.cjs";
import Paciente from "./paciente.js";

const Turno = sequelize.define("turno", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

Turno.beforeCreate((instance, options) => {
  instance.fecha = new Date();
});

Paciente.hasMany(Turno, {
  foreignKey: "pacienteId",
  sourceKey: "dni",
});

Turno.belongsTo(Paciente, {
  foreignKey: "pacienteId",
  targetId: "dni",
});

export default Turno;
