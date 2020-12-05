// START: IMPORTS
const RPC = require('discord-rpc');
// END: IMPORTS

// CONNECT TO DISCORD SCRIPT
// Create New RPC 
const rpc = new RPC.Client({
  transport: 'ipc',
});

function startDiscordRPC(displayDetail,displayState){
  this.displayDetail = displayDetail;
  this.displayState = displayState;

  // Create Event: Ready
  rpc.on('ready',() => {
    // Set Activity of User
    rpc.setActivity({
      details: displayDetail,
      state: displayState,
      startTimestamp: new Date(),
      largeImageKey:'adzu',
      largeImageText:'Ateneo de Zoom University🦅',
      smallImageKey:'adzu_bird',
      smallImageText:'ADZU🦅'
    });
    console.log("ADZU Discord-RPC Connection Successful!")
  });

  // Login Function
  rpc.login({
    clientId:'783396264431452190'
  });

}

module.exports = { startDiscordRPC};