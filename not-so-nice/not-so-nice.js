!function() {
	var me = Players.getMe();
	var mount = Textures.sprite('mountain4');
	game.graphics.layers.flags.addChild(mount);

	setInterval(function(){
		mount.visible = false;
		for (var playerID in Players.getIDs()) {
			var player = Players.get(playerID);
			if (player.type == 5 && player.team != me.team && Math.abs(player.lowResPos.x - me.lowResPos.x) < 1250 && Math.abs(player.lowResPos.y - me.lowResPos.y) < 700 ) {
				mount.position.set(player.lowResPos.x, player.lowResPos.y);
				mount.visible = true;
			}
		}
	}, 1000);

	SWAM.registerExtension({
		name: "not-so-nice",
		id: "notsonice",
		description: "this is probably a bad idea",
		author: "jello",
		version: "0.1"
	});
}();