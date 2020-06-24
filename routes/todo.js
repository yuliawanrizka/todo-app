var express = require('express');
var router = express.Router();

/* GET todo listing. */
router.get('/', function(req, res) {
  res.send('todo listing');
});

/* POST todo create. */
router.post('/', function(req, res) {
  res.send('todo create');
});

/* GET todo detail. */
router.get('/:id', function(req, res) {
  res.send('todo detail ' + req.params.id);
});

/* PUT todo update. */
router.put('/:id', function(req, res) {
  res.send('todo update ' + req.params.id);
});

/* DELETE todo delete. */
router.delete('/:id', function(req, res) {
  res.send('todo delete ' + req.params.id);
});


module.exports = router;
