import con from "../connection/dbConfig.js";

function checkDb() {
    return new Promise(async (resolve, reject) => {
        const query = `show databases like '${process.env.DATABASE_NAME}'`;
        con.query(query, (error, result) => {
            if (error) {
                console.log("Error while checking database : ", error);
                reject(error);
            }
            else {
                // console.log("result : ",result);
                if (result.length > 0) {
                    console.log("Database exist");
                    const useQuery = `use ${process.env.DATABASE_NAME}`;
                    con.query(useQuery, (error) => {
                        if(error)
                            console.log("Error while use database when database exist : ",error);
                        else
                            console.log("Database selected successfully");
                    });
                    resolve(true);
                } else {
                    console.log("Database not exist");
                    resolve(false);
                }
            }
        });
    })
}
function createDb() {
    return new Promise(async (resolve, reject) => {
        if (!await checkDb()) {
            const query = `create database if not exists ${process.env.DATABASE_NAME}`;
            con.query(query, (error, result) => {
                if (error) {
                    console.log("Error while creating database : ", error);
                    reject(error);
                }
                else {
                    console.log("Database created successfully : ", result);
                    const useQuery = `use ${process.env.DATABASE_NAME}`;
                    con.query(useQuery, (error) => {
                        if (error) {
                            console.log("Error while use database : ", error);
                            reject(error);
                        } else {
                            /*admin table creation starts*/
                            const adminQuery = 'create table admin(email varchar(45) not null primary key,password varchar(45) not null)';
                            con.query(adminQuery, (error) => {
                                if (error) {
                                    console.log("Error while creation of admin table : ", error);
                                    reject(error);
                                } else {
                                    const adminDataQuery = 'insert into admin(email,password) values("admin@gmail.com","admin@12345")';
                                    con.query(adminDataQuery, (error) => {
                                        if (error) {
                                            console.log("Error while inserting data into admin table : ", error);
                                            reject(error);
                                        } else {
                                            console.log("Data in admin table inserted successfully");
                                            
                                            const userQuery = 'create table user(uid int not null primary key auto_increment,username varchar(45) not null,email varchar(45) unique not null,password varchar(45) not null,address varchar(45) not null,blockstatus tinyint not null default 0, adminverify tinyint not null default 0)';
                                            con.query(userQuery, (error) => {
                                                if (error) {
                                                    console.log("Error while creating user table : ", error);
                                                    reject(error);
                                                } else {
                                                    console.log("User table created successfully");
                                                    const todoQuery = 'create table todo(todoid int not null primary key auto_increment,todotitle varchar(45) not null,startdate varchar(45) not null,enddate varchar(45) not null,status varchar(45) not null)';
                                                    con.query(todoQuery, (error) => {
                                                        if (error) {
                                                            console.log("Error while creating todo table : ", error);
                                                            reject(error);
                                                        } else {
                                                            console.log("Todo table created successfully");
                                                            resolve(true);
                                                        }
                                                })
                                              }
                                            });
                                        }
                                    });
                                }
                            });
                            /*admin table creation ends*/
                        }
                    });
                }
            });
        }
        else {
            resolve(true);
        }
    })
}

const createDatabase = async (request, response, next) => {
    try {
        await createDb();
        next();
    } catch (error) {
        console.log("Error while creating database and necessary tables : ", error);
    }
}
export default createDatabase;