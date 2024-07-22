import express from 'express';
import userRoutes from './routes/userRoutes'; // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', userRoutes); // Usa las rutas de usuario aquí

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
