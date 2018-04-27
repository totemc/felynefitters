import express from 'express';
import config from './config';
import serverRender from 'Renders/server';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // code to render react server-side
    const content = serverRender();
    res.render('index', { content });
});

app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}`);
});
