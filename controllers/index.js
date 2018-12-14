const routes = require('./routes/index.js');

app.use('/api/v1', routes(router));