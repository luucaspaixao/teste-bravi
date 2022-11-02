import { DataSource } from "typeorm";
import { Contact } from "../modules/contact/entities/Contact";
import { Person } from "../modules/person/entities/Person";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "mysql",
  port: 3306,
  username: "root",
  password: "root",
  database: "bravi_db",
  synchronize: true,
  logging: true,
  entities: [Person, Contact],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export { AppDataSource };
