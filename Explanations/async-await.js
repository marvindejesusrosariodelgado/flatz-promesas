async function requesstHandler(req, res) {

try {
    const user = await User.findById(req.userId);    
const tasks = await Tasks.findById(user.tasksId);
tasks.completed = true;
await Tasks.save();
res.send('Task Completed');

}
catch(e) {
    res.send(e);
}


}