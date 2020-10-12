// run nom i to reinstall all the modules that are needed

const express = require('express');
const app = express();   //http://expressjs.com/

app.use(express.json());


app.get('*', (req, res) => {
    res.sendFile('/main.html', { root: './' });
});

app.listen(8000, () => console.log('listening on port 8000...'));