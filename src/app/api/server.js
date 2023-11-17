const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(bodyParser.json()); 
app.use(cors());
const db = mysql.createConnection({  
     host: "localhost",
     user: "root",
     password: "root",
     database: "eventscheduler", 
    });
db.connect((err) => {  
     if (err) {
         console.log('Database connection error: ' + err);  
        }else {  
        console.log('Connected to the database');  
        } 
});
 app.post('/register', (req, res) => {  
     const { username,firstName,lastName,password,email,phoneNumber,gender } = req.body;  
     console.log("POST method is called ");
    const sql = 'INSERT INTO registration (username,firstName,lastName,password,email,phoneNumber,gender) VALUES (?,?,?,?,?,?,?)';   
    db.query(sql, [username,firstName,lastName,password,email,phoneNumber,gender], (err, result) => {  
           if (err) {    
               console.log('Database error: ' + err);    
                res.status(500).send('Error registering user');     
            } else { 
                      res.status(200).send('User registered successfully');  
                    }  
         });
   });

app.listen(port, () => {  
     console.log(`Server is running on port ${port}`);
     });
