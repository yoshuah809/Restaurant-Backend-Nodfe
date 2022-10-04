const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		mongoose.connect(process.env.DATABASE_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Database Connection success");
	} catch (error) {
		console.log(err);
	}
};

module.exports = connectDB;
