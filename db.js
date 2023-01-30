const { connect } = require("mongoose");

const connectDb = async () => {
  try {
    await connect(process.env.MONGODB_URI || "mongodb+srv://iwvuser:iwvuser1@pruebas.nabbcu0.mongodb.net/?retryWrites=true&w=majority");
    console.log("Mongodb connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDb };
