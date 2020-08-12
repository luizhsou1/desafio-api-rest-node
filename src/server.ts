import { port } from './main/env';
import { app } from './main/app';

app.listen(port, () => console.log(`Running in port: ${port}`));
