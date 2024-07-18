import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();  // Cargar las variables de entorno desde el archivo .env

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:3000', // La URL del frontend
  credentials: true
}));
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





