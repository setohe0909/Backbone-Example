var express = require('express'),
              http = require('http'),
              items = require('./data/comics');

var app = express()
          .use(express.bodyParser())
          .use(express.static('public'));

app.get('/', function(req, res){

    res.render('index.hbs', {data: JSON.stringify(items)});

});

app.get('/items', function  (req, res) {

    res.json(items);

});

app.post('/items', function  (req, res) {

  var comparacion = items.filter(function  (item) {

    return item.url === req.body.url;

  });

  if (comparacion.length > 0) {

    res.json(409, {status: 'Item no existe'});

  } 
  else {

    req.body.id = req.body.url;
    items.push(req.body);
    res.json(req.body);

  }

});

app.get('/items/:nombre_item', function  (req, res) {

  var comparacion = items.filter(function  (item) {

    return item.url === req.params.nombre_item;

  });

  if (comparacion.length > 0) {

    res.json(comparacion[0]);

  } 
  else {

    res.json(404, {status: 'Item inválido'});

  }

});

app.delete('/items/:item_name', function  (req, res) {

  var encontrado = false;

  items.forEach(function (item, index) {

    if (item.url === req.params.item_name) {

      encontrado = index;

    }

  });

  if (encontrado) {

    items.splice(encontrado, 1);

    res.json(200, {status: 'Eliminado'});

  } 
  else {

    res.json(404, {status: 'Item inválido'});

  }

});

app.get('/*', function  (req, res) {

  res.json(404, {status: 'No encontrado'});

});

http.createServer(app).listen(3000, function () {

  console.log("Servidor listo escuchando: http://localhost:3000");

});
