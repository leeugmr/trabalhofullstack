const express = require('express');
const bodyParser = require('body-parser');
const pessoaRoutes = require('./routes/pessoa');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5501;

app.use(bodyParser.json());
app.use('/api', pessoaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
