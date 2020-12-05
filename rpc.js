// START: IMPORTS
const RPC = require('discord-rpc');
// END: IMPORTS

// CONNECT TO DISCORD SCRIPT
// Create New RPC 
const rpc = new RPC.Client({
  transport: 'ipc',
});

// Create Event: Ready
rpc.on('ready',() => {
  // Set Activity of User
  rpc.setActivity({
    details: 'CODING PROJECTS',
    state:'Deving ADZU Bot',
    startTimestamp: new Date(),
    largeImageKey:'adzu',
    largeImageText:'Ateneo de Zoom University🦅',
    smallImageKey:'adzu_bird',
    smallImageText:'ADZU🦅'
  });
  console.log("Running Rich Presence")
});

// Login Function
rpc.login({
  clientId:'783396264431452190'
})