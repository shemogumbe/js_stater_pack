import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('App server listening on port 3000!'));
//# sourceMappingURL=appServer.js.map
