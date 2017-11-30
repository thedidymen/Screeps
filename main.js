//import stuff
require('prototype.creep');
require('prototype.spawn');
var n = 0

module.exports.loop = function () {
	//console.log('Round:', n++)

	// removing dead creeps from memory
	Object.keys(Memory.creeps).map(n=>{if(!Game.creeps[n]){
		delete Memory.creeps[n]
		console.log('Clearing non-existing creep memory:', n);
	}})


	// creeps work!
    for (let name in Game.creeps) {
    	Game.creeps[name].checkWorking();
        // run creep logic
        Game.creeps[name].runRole();
    }

    // for each spawn
    for (let spawnName in Game.spawns) {
        // run spawn logic
       Game.spawns[spawnName].spawnCreepsIfNecessary();
    }
};