import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();  // Cargar las variables de entorno desde el archivo .env

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
