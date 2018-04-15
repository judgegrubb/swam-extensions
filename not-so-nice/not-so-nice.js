!function() {
	SWAM.on("scoreboardUpdate", function(scores, minimap, maxScoreboard){
		var me = Players.getMe();
		for (var playerID in Players.getIDs()) {
			var player = Players.get(playerID);
			if (player.type == 5 && player.team != me.team && Math.abs(player.lowResPos.x - me.lowResPos.x) < 1250 && Math.abs(player.lowResPos.y - me.lowResPos.y) < 700 ) {
				Network.sendWhisper(me.id, "Enemy prowler: " + player.name + " at: " + player.lowResPos.x + ", " + player.lowResPos.y);
			}
		}
	});

	SWAM.registerExtension({
		name: "not-so-nice",
		id: "notsonice",
		description: "this is probably a bad idea",
		author: "jello",
		version: "0.1"
	});
}();