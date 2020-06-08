
                           const express = require ('express');
                            const app = express();

                            app.get('/', (req,res) =>  {

                                res.sendFile(__dirname + '/paginas/index.html');
                            });

//puerto3000

                            const PORT = process.env.SERVER_PORT || 3000 ;
                            app.listen(PORT, ()=>
                                console.log(`Server runing on port ${PORT}`)
                            );
