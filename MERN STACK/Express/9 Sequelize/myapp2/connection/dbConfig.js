// import Sequelize from "sequelize";
// const sequelize = new Sequelize(
//     'maydb', 
//     'root',
//     'root',
//     {
//         host:'127.0.0.1',
//         dialect:'mysql'
//     }
// );

// await sequelize.authenticate();
// console.log("Database Server connection successfull");
// export default sequelize;

import { Sequelize } from "sequelize";

const rootSequelize = new Sequelize("mysql://root:root@localhost:3306"); // Connect without DB

let sequelize; // Declare outside

async function initializeDatabase() {
    try {
        await rootSequelize.query("CREATE DATABASE IF NOT EXISTS maydb"); // Create DB
        console.log("Database created successfully!");

        // ✅ Initialize sequelize after database creation
        sequelize = new Sequelize("maydb", "root", "root", {
            host: "localhost",
            dialect: "mysql"
        });

        await sequelize.authenticate();
        console.log("Connected to the database!");
        
        return sequelize; // ✅ Return initialized Sequelize instance
    } catch (error) {
        console.error("Error creating database:", error);
        throw error; // Ensure calling code can handle errors
    } finally {
        await rootSequelize.close();
    }
}
sequelize = await initializeDatabase();
// console.log("---------------- ",sequelize);

// ✅ Export a function to get Sequelize instance
 export default sequelize;
