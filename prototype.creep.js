var roles = {
	harvester: require('role.harvester'),
	upgrader: require('role.upgrader'),
	builder: require('role.builder')
}

Creep.prototype.runRole =
    function () {
        roles[this.memory.role].run(this);
    };

Creep.prototype.checkWorking =
	function () {
		if(this.carry.energy == this.carryCapacity){
    		this.memory.working = false;
    	}
    	else if (this.carry.energy == 0){
    		this.memory.working = true;
    	}
	};