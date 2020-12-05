const RPC = require('discord-rpc');
const rpc = new RPC.Client({
  transport: 'ipc',
});

// Create Event: Ready
rpc.on('ready',() => {
  // Set Activity of User
  rpc.setActivity({
    details: 'TestNewDetail',
    state:'TestNewState',
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