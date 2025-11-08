let express = require("express");
let userRouter = require("./controllers/userController");
let categoriesRouter = require("./controllers/categoriesController");
let cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();

let app = express();
let port = 3000;

connectDB();

app.use(cors());
app.use("/", express.json());
app.use("/api/users", userRouter);
app.use("/api/categories", categoriesRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
