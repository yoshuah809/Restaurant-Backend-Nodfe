/* 
CREATE ENTRY POINT FILE ON SERVR CALLED SERVER.JS
INSTALL EXPRESS AND MONGOOSE
CREATE LISTENING PORT
CREATE DB CONNECTION
*/
const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/uploads", express.static("uploads"));

connectDB();
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));

app.listen(PORT, function () {
	console.log("Express is Listening on port " + PORT);
});
