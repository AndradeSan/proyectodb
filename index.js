
                           const express = require ('express');
                           require('dotenv').config();
                            const app = express();

                            app.use(express.static('paginas'));

                            app.get('/paginas', (req,res) =>  {

                                res.sendFile(__dirname + '/paginas/index.html');
                            });

//puerto3000

                            const PORT = process.env.SERVER_PORT || 3000 ;
                            app.listen(PORT, ()=>
                                console.log(`Server runing on port ${PORT}`)
                            );
