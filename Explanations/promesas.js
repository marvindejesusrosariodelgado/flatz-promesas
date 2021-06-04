function requesstHandler(req, res) {
    user.findById(req.userId)
    .then(function (user) {
       Tasks.findById(user.tasksId)
    })
    .then(function (tasks){
        tasks.completed = true;
        return tasks.save();
    })
    .then(function () {
        res.send('Tasks completed')
    })
    .catch(function (err) {
        res.send(err);
    })
}