const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3333;

//rodando
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

