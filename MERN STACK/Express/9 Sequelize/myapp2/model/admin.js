import { DataTypes} from "sequelize";
import sequelize from "../connection/dbConfig.js";
const admin = sequelize.define("admin",{
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:"admin"});

(async () => {
    try {
        await admin.sequelize.sync(); // Ensure table is created
        
        // ✅ Check if an admin exists before inserting
        const adminExists = await admin.findOne({ where: { email: "admin@gmail.com" } });

        if (!adminExists) {
            await admin.create({
                email: "admin@gmail.com",
                password: "12345678"
            });
            console.log("Default admin user created.");
        } else {
            console.log("Admin already exists.");
        }

    } catch (error) {
        console.error("Error syncing database:", error);
    }
})();

export default admin;
