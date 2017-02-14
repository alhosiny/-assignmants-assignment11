Task = function(category, title, priority, estimate){
        this.category = category;
        this.title = title;
        this.priority = priority;
        this.estimate = estimate;
        this.spent = 0;
        this.remaining = 1.5;
}
Task.prototype.track = function(spent){
    if(spent > 0){
        this.spent = spent;
        this.remaining = this.estimate - this.spent;
    }
}
Task.prototype.done = function(){
    return this.remaining === 0;
}
Task.prototype.complete = function(){
    this.remaining = 0;
}

// module.exports = {
//     Task: Task
// }

module.exports = Task;