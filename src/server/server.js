const express = require('express');
const path = require('path');
const open = require('open');
const config = require('../../webpack.config');
const webpack = require('webpack');

const port = 5000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));    

app.use(express.static(path.resolve(__dirname + '@src/images')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`)
    }
});