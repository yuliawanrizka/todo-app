var express = require('express');
var router = express.Router();
var todoController = require('../controller/todo.controller');

/**
 * Get all todo list
 * @route GET /todo
 * @group todo - Operations about todo
 * @returns {object} 200 - An array of todo
 * @returns {Error}  default - Unexpected error
 */
router.get('/', todoController.todo_list);

/**
 * Create todo item
 * @route POST /todo
 * @group todo - Operations about todo
 * @param {string} todo.query.required - todo text
 * @returns {object} 200 - A created object of todo
 * @returns {Error} 400 - No todo text specified
 * @returns {Error}  default - Unexpected error
 */
router.post('/', todoController.todo_create);

/**
 * Get todo detail
 * @route GET /todo/{id}
 * @group todo - Operations about todo
 * @param {string} id.path.required - id
 * @returns {object} 200 - A created object of todo
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', todoController.todo_get_detail);

/**
 * Update todo item
 * @route PUT /todo/{id}
 * @group todo - Operations about todo
 * @param {string} id.path.required - id
 * @param {string} todo.param.required - todo text
 * @returns {object} 200 - A created object of todo
 * @returns {Error}  default - Unexpected error
 */
router.put('/:id', todoController.todo_update);

/**
 * Delete todo item
 * @route DELETE /todo/{id}
 * @group todo - Operations about todo
 * @param {string} id.path.required - id
 * @returns {object} 200 - A created object of todo
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', todoController.todo_delete);


module.exports = router;
