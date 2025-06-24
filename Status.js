const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const clientId = '1370470578263298189';
RPC.register(clientId);

client.on('ready', () => {
    client.setActivity({
        state: 'Dinsouar Is Cool',
        details: 'Playing',
        startTimestamp: new Date(),
        largeImageKey: '1370649378015936512',
        largeImageText: 'Hey',
        smallImageText: 'Rogue - Level 100',
        partyId: 'ae488379-351d-4a4f-ad32-2b9b01c91657',
        partySize: 1,
        partyMax: 10,
        joinSecret: 'MTI4NzM0OjFpMmhuZToxMjMxMjM'
    });

    console.log('Rich Presence is active!');
});

client.login({ clientId }).catch(console.error);
