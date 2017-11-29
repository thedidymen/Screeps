//import stuff
require('prototype.creep');
require('prototype.spawn');

module.exports.loop = function () {

	// removing dead creeps from memory
	Object.keys(Memory.creeps).map(n=>{if(!Game.creeps[n]){
		delete Memory.creeps[n]
		console.log('Clearing non-existing creep memory:', n);
	}})


	// creeps work!
    for (let name in Game.creeps) {
        // run creep logic
        Game.creeps[name].runRole();
    }

    // for each spawn
    for (let spawnName in Game.spawns) {
        // run spawn logic
       Game.spawns[spawnName].spawnCreepsIfNecessary();
    }
};