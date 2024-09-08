const express = require('express');
const router = express.Router();
const { Pessoa } = require('../models');


router.post('/pessoas', async (req, res) => {
  try {
    const { nome, cpf, telefone } = req.body;
    const pessoa = await Pessoa.create({ nome, cpf, telefone });
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/pessoas', async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
