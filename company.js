Employee = function(name , department){
    this.name = name;
    this.department = department;
    this.role = 'employee';
}
Employee.prototype.getInfo = function(){
    return 'My name is '+this.name +'. I am '+this.role+' in the IT department.';
}

Manager = function(name, department, reports){
    this.name = name;
    this.department = department;
    this.reports = reports;
    this.role = 'manager'; 
}
Manager.prototype.getInfo = function(){
    //return 
}

module.exports = {
    Employee: Employee,
    Manager: Manager
}