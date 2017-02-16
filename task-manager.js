Task = require('./task');
create = function(){
         var tasks = [];
         var create = function(category, title, priority,sestimate){
                 var task = new Task(category, title, priority,sestimate);
                 tasks.push(task);
                 return task;
        }
        var get = function(index){
             return tasks[index];
         }
         var getAll = function(active){
             var active_tasks = [];
                 for(j = 0;j < tasks.length; j++){
                     if(!tasks[j].done()){
                         active_tasks.push(tasks[j]);
                     }
             }
             return active_tasks;
         }
         var find = function(title){
                 var matched_tasks = [];
                 for(j = 0;j < tasks.length; j++){
                     if(tasks[j].title.toLowerCase().indexOf(title.toLowerCase()) != -1 ||
                     tasks[j].category.toLowerCase().indexOf(title.toLowerCase()) != -1 ){
                        matched_tasks.push(tasks[j]);   
                     }   
                 }
                 return matched_tasks; 
         }
         var remove = function(index){
             if(typeof index != 'number'){
                 index = tasks.indexOf(index);
             }
             tasks.splice(index);
         }  
     return {
         create : create,
         get: get,
         getAll : getAll,
         find : find,
         remove: remove
     };
}


module.exports = {
    create: create
}