const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('cadastro_pessoas_db', 'admin', 'admin', {
  host: '127.0.0.1',
  port: 5501,
  dialect: 'postgres'
});


sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
