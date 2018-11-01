require('dotenv').config();
const server = require('./server.js');
const port = process.enc.PORT || 8000;
server.listen(port, () => console.log(`Server is running on port ${port}.`));