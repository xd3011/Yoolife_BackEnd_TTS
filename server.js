const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var cors = require('cors');

dotenv.config();
const PORT = process.env.PORT || 5000;
// Create router
const route = require("./routes");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Route init
route(app);
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}/api/auth/login`));
