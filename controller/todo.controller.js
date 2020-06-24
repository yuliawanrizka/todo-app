var db = require("../config/database")

exports.todo_list = function(req, res) {
    var sql = "select * from todo";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message" : "success",
            "data": rows
        })
    });
};

exports.todo_create = function(req, res) {
    var errors=[]
    if (!req.body.todo){
        errors.push("No todo text specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        todo: req.body.todo
    }
    var sql = "INSERT INTO todo (todo) VALUES (?)";
    var params = [data.todo];
    db.run(sql, params, (err, result) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id": this.lastID
        })
    });
};

exports.todo_get_detail = function(req, res) {
    var sql = "select * from todo where id = ?";
    var params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message": "success",
            "data": row
        })
    });
};

exports.todo_update = function(req, res) {
    var data = {
        todo: req.body.todo
    }
    db.run(
        `UPDATE todo set 
           todo = COALESCE(?,todo)
           WHERE id = ?`,
        [data.todo, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
};

exports.todo_delete = function(req, res) {
    db.run(
        'DELETE FROM todo WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
};