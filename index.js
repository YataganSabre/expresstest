const express = require("express");
var app = express()
app.get("/", function(request, response)
{
    response.send("Hey, it's me, Khan.")
})
app.listen(10000, function()
{
    console.log("Starter application on port %d", 10000)
});