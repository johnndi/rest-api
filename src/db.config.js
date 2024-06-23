import pkg from "pg";
const {Pool} = pkg;
import {config} from "dotenv"
config ();
const pool = new Pool ({
    user :process.env.user,
    password : process.env.password,
    host :process.env.host,
    port:process.env.port,
    database: process.env.database,
});
export default pool;