import mongoose from "mongoose";

const openDatabaseConnection = async () => {
  const connectionString = 'mongodb+srv://united:1@craftman.bkmzt.mongodb.net/united_undeground?retryWrites=true&w=majority';

  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

export default openDatabaseConnection;
