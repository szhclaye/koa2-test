const config = require('./config/default.js');
console.log('-------', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    require('babel-register'); //可以使项目支持import export等es6语法，当然要配合些其他的，看pagekage.json
}

require('babel-polyfill');

//set up app

const app =
    process.env.NODE_ENV === 'development'
        ? require('./src/app')
        : require('./dist/app');

app.listen(
    config.port,
    console.log(`server is running on port ${config.port}`),
);
