const pool = require('../connection/connection.js');

const postData = {};

//get all post Data
postData.getPostData = async()=>{
    console.log('mathu');
    try{
        console.log('soothanan');
        const allusers = await pool.query('SELECT * FROM posts;');
        return allusers.rows;
        
    }catch(err){
        console.log(err.message);
    }
};


module.exports = postData;