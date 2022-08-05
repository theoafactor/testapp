const express = require("express");
require("dotenv").config();

const server = express();

server.get("/test", function(request, response){
    response.send("Everything is working");
})


server.listen(process.env.PORT, process.env.HOSTNAME, () => console.log(`Listening on PORT ${process.env.PORT}`))