var express = require('express');
var router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ messages: [] }).write()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(db.get('messages').value());
});


router.post('/', function(req, res, next) {
  let data = req.body
  db.get('messages').push(data).write()
  res.send('Saved');
});

router.put('/:id', function(req, res, next) {
  let data = req.body
  let id = req.params.id
  console.log(typeof id)
  db.set('posts', []).write()
  db.get('messages').find({ id: req.params.id }).assign({message: data.message}).write()
  res.send('Updated');
});

router.delete('/:id', function(req, res, next) {
  let id = req.params.id
  console.log(id)
  db.get('messages').remove({ "id": id }).write()
  res.send('Deleted');
});

module.exports = router;
