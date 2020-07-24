const express = require('express');
const app = express();

app.get('/', () => {
    console.log('Hello world');
});

app.listen(8000)