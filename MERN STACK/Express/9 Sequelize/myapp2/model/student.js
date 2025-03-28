import { DataTypes} from "sequelize";
import sequelize from "../connection/dbConfig.js";
const student = sequelize.define("student",{
    uid:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true    
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address :{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:"student"});

const res = await student.sequelize.sync();
// console.log(res);
export default student;
