import express from "express";
import morgan from "morgan";
import cors from "cors";
import reservation from "./routes/reservation";

const app = express();
const corsOptions = {};

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
app.get('/', (req, res) => {
    res.json({message:'Restron API V0.0.1'});
});

app.use('/api/reservation',reservation);

export default app;