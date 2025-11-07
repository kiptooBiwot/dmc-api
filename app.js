import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import path from 'path'


import dotenv from 'dotenv'
dotenv.config()

const app = express()

// import dbConnection from './utilities/dbConnection.js'
import { dbConnection } from './utilities/dbConnection.js'
import authRoutes from './routes/auth.routes.js'
import articleRoutes from './routes/article.routes.js'


const PORT = process.env.PORT || 5000

// Serve static files from public
app.use('/uploads', express.static(path.join(process.cwd(), 'public', 'uploads')));


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

// ROUTES
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/article', articleRoutes)


// ERROR HANDLING
app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});


app.listen(PORT, () => {
  dbConnection()
  console.log(`The server is running on port ${PORT}....`);

})