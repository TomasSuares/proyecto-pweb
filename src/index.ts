import express from 'express';
import eventRoutes from './routes/eventRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', eventRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
