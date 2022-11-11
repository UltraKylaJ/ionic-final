import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import taskRoutes from './routes/taskRoutes';
import mongoose from 'mongoose';

const connectionString: string = 'mongodb://localhost:27017/taskDB';

mongoose.connect(connectionString).then(
    () => console.log('database connection successful!!'),
    err => console.log('Error connecting to the database', err)
);

const app = express();
const cors = require('cors');
const corsOptions = {
    origin: [ 'http://localhost:3001' ]
};
app.use(cors(corsOptions));

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/tasks', taskRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

app.listen(3000);