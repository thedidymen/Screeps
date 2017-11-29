var roles = {
	harvester: require('role.harvester'),
	upgrader: require('role.upgrader')
}

Creep.prototype.runRole =
    function () {
        roles[this.memory.role].run(this);
    };