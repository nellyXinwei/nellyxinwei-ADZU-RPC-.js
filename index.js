const RPC = required('discord-rpc');
const rpc = new RPC.Client({
  transport: 'ipc',
});

// Create Event: Ready
rpc.on('ready',() => {
  // Set Activity of User
  rpc.setActivity({
    details: 'details',
    state:'state',
    startTimestamp: new Date(),
    largeImageKey:'largeIcon',
    largeImageText:'largeImageText',
    smallImageKey:'smallIcon',
    smallImageText:'smallImageText'
  });
  console.log("Running Rich Presence")
});

// Login Function
rpc.login({
  clientId:'clientId'
})