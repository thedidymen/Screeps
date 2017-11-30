var roleUpgrader = require('role.upgrader');


module.exports = {
    run: function (creep) {
        // if creep is supposed to complete a constructionSite
    	if (creep.memory.working == false) {
	        // find closest constructionSite
	        var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
	        // if one is found
	        if (constructionSite != undefined) {
	            // try to build, if the constructionSite is not in range
	            if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
	                // move towards the constructionSite
	                creep.moveTo(constructionSite);
	            }
	        }
	        // if no constructionSite is found
	        else {
	            // go upgrading the controller
	            roleUpgrader.run(creep);
	        }
	    }
        else if ( creep.memory.working == true ) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
    }
};