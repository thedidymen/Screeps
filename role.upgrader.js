var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
    	if(creep.carry.energy == creep.carryCapacity){
    		creep.memory.working = false
    	}
    	else if (creep.carry.energy == 0){
    		creep.memory.working = true
    	}

        if(creep.memory.working) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else if ( creep.memory.working == false ) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};

module.exports = roleUpgrader;