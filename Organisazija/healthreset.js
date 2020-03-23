let playerHealth = player.health
player.health = 100

mp.events.addCommand("healthreset", (player) => {
	let playerHealth = player.health
    player.health = 100
});