var roles = {
	harvester: require('role.harvester')
}

Creep.prototype.runRole =
    function () {
        roles[this.memory.role].run(this);
    };