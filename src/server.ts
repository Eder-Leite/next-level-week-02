import expres from "express"
import routes from "./routes";
import cors from "cors";

const app = expres();

app.use(cors());
app.use(expres.json());
app.use(routes);

app.listen(3333);