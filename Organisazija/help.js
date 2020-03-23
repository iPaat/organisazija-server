// Help Command //
// !{${farbe}}

let red = `#ff0000`;
let white = `#ffffff`;
let orange = `#f09500`;
mp.events.addCommand("help", (player, message) => {
	player.outputChatBox(`!{${red}}[Organisazija-Gangwar]!{${white}} Commands: /kleidung`);
});

mp.events.addCommand("kleidung", (player, message) => {
	player.outputChatBox(`!{${red}}[Organisazija-Gangwar]!{${orange}} [temporary-feature]!{${white}} /lcnkleidung, /orgkleidung, /yakuzakleidung`);
});
