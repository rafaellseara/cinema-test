const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'EngWeb 2025',
    docente: 'José Carlos Ramalho',
    instituição: 'UMinho'
  });
});

router.get('/filmes', function(req, res, next) {
  axios.get('http://localhost:3000/filmes?_sort=titulo')
    .then(resp => {
      var filmes = resp.data
      res.render('filmes', { filmes: filmes, title: 'Lista de Filmes' })
    })
    .catch(err => {
      console.log(err)
      res.render('error', { error: err })
    })
});

module.exports = router;
