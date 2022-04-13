import { Sequelize } from "sequelize/types"

const sequelizeOptions = {
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: false,
  define: { syncOnAssociation: true },
  timestamps: false,
  underscored: true,
  freezeTableName: true,
}
const sequelize = new Sequelize("auth-db", "cem_user", "password", sequelizeOptions)

sequelize
  .authenticate()
  .then(() => {
    console.info("Connection has been stablish!")
  })
  .catch((err) => console.error("Unable to connect to the database!"))

export default sequelize
