var express = require('express');
var router = express.Router();
var todoController = require('../controller/todo.controller');

/* GET todo listing. */
router.get('/', todoController.todo_list);

/* POST todo create. */
router.post('/', todoController.todo_create);

/* GET todo detail. */
router.get('/:id', todoController.todo_get_detail);

/* PUT todo update. */
router.put('/:id', todoController.todo_update);

/* DELETE todo delete. */
router.delete('/:id', todoController.todo_delete);


module.exports = router;
