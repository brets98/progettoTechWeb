// run nom i to reinstall all the modules that are needed

const express = require('express');
const app = express();   //http://expressjs.com/

app.get('/main', (req, res) => {
    res.sendFile('/main.html', { root: './HTML/' });
});

app.listen(3000, () => console.log('listening on port 3000...'));