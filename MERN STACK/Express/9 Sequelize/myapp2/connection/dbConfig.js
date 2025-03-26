import Sequelize from "sequelize";
const sequelize = new Sequelize(
    'maydb', 
    'root',
    'root',
    {
        host:'127.0.0.1',
        dialect:'mysql'
    }
);

await sequelize.authenticate();
console.log("Database Server connection successfull");
export default sequelize;
