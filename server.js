const express = require("express");
const path = require("path");

const app = express();

require("dotenv").config();

app.use(express.static("./client/build"));

require("./config");


app.use("/api", require("./routes"));

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
})

const PORT = 1055;

app.listen(PORT, () => console.log(`server start on port ${PORT}`));