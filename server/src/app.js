require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");

//connectDB
const connectDB = require("../db/connect");
const authenticateUser = require("./middleware/authentication");
app.use(express.json());
app.use(cors());

//routes
const DoctorRouter =require("./routes/doctorsRoutes");
const ClinicRouter =require("./routes/clinicsRoutes");
const NGORouter =require("./routes/ngosRoutes");
const AnimalRouter =require("./routes/animalsRoutes");
const IssueRouter =require("./routes/issuesRoutes");
const VolunterRouter =require("./routes/voluntersRoutes");
const BlogRouter =require("./routes/blogsRoutes");
const authRouter = require('./routes/emailauthorizationRoutes');


// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.get("/", (req, res) => {
  res.send("login");
});

app.use('/api/v1/auth', authRouter);
app.use("/api/v1/doctors", DoctorRouter);
app.use("/api/v1/clinics", ClinicRouter);
app.use("/api/v1/ngos", NGORouter);
app.use("/api/v1/animals", AnimalRouter);
app.use("/api/v1/issues", IssueRouter);
app.use("/api/v1/volunters", VolunterRouter);
app.use("/api/v1/blogs", BlogRouter);
app.use('/api/v1/auth', authRouter);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`LenderApp Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
