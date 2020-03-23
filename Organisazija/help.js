// Help Command //

let red = `#ff0000`;
let white = `#ffffff`;
mp.events.addCommand("help", (player, message) => {
	player.outputChatBox(`!{${red}}[Organisazija-Gangwar]!{${white}} Es gibt aktuell noch keine Hilfestellungen!`);
});
