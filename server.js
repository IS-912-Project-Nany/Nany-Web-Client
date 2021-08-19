const express = require('express');
const path = require('path');

const app = express();

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static(__dirname + '/dist/nany-web-client'));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/nany-web-client/index.html'));
});

app.listen(process.env.PORT || 5000);