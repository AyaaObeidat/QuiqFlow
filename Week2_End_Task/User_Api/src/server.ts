import express from 'express';
import errorHandlier from './Middlewares/ErrorHandling';
import router from './Routes/UserRoute';

const app = express();
app.use(express.json());
app.use('/api/users', router);
app.use(errorHandlier);
app.listen(3777, () => {
  console.log('server running on http://localhost:3777');
});
