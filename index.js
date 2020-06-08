
                           const express = require ('express');
                            const app = express();

                            app.get('/', (req,res) =>  {

                                res.sendFile(__dirname + '/paginas/index.html');
                            });


                            const PORT = process.env.SERVER_PORT || 3000 ;
                            app.listen(PORT, ()=>
                                console.log(`Server runing on port ${PORT}`)
                            );
