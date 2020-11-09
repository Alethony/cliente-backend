const express = require('express');
const UsuarioController = require ('../controllers/usuarioController');
const ProdutosController = require ('../controllers/produtosController');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SelectAll);
router.get('/usuarios/:id', UsuarioController.SelectDetail);

router.post('/produtos', ProdutosController.Insert);
router.get('/produtos', ProdutosController.SelectAll);
router.get('/produtos/:id', ProdutosController.SelectDetail);

module.exports = router;