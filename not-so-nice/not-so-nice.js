!function() {
	
	SWAM.on("gamePrep", function() {
		console.log("setting up!");
		var mountObj = Textures.sprite('mountain4');
		game.graphics.layers.flags.addChild(mountObj);
		setInterval(function(mount){
			console.log("REFRESH!!!");
			mount.visible = false;
			for (var playerID in Players.getIDs()) {
				var player = Players.get(playerID);
				var me = Players.getMe();
				if (player.type == 5 && player.team != me.team && Math.abs(player.lowResPos.x - me.lowResPos.x) < 1250 && Math.abs(player.lowResPos.y - me.lowResPos.y) < 700 ) {
					mount.position.set(player.lowResPos.x, player.lowResPos.y);
					mount.visible = true;
				}
			}
		}, 1000, mountObj);
	});

	SWAM.registerExtension({
		name: "not-so-nice",
		id: "notsonice",
		description: "this is probably a bad idea",
		author: "jello",
		version: "0.1"
	});
}();