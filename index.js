// START: IMPORTS
const layout = require('./layout');
const detail = require('./activityDetail');
const state = require('./activityState');
const rpc = require('./rpc');
// END: IMPORTS


// START: ACTIVITY DETAILS DATA
const details = [
    "🦅 ADZU-Ateneo de Zoom University",
    "🇵🇭 FILI12(FF)-Panitikan ng Pilipinas",
    "📐 MATH21(G)-University Precalculus",
    "🦅 INTACT11(O2)-Introduction to Ateneo Culture and Traditions",
    "💻 CSCI21(B)-Introduction to Programming I"
]
// END: ACTIVITY DETAILS DATA

// START: ACTIVITY STATES DATA
const states = [
    "🏫 A/Sync Academics",
    "🎥 Having Synchronous Class",
    "📚 Doing Asynchronous Stuff",
    "⛔ DO NOT DISTURB",
    "😛 SLACKING OFF",
    "🥴 NOT LISTENING",
    "🧐 PRODUCTIVE",
    "👻 DYING"
]
// END: ACTIVITY STATES DATA

layout.start();
const displayDetail = detail.setDetail(details);
const displayState = state.setState(states);
layout.run(displayDetail, displayState);

// START: START DISCORD RPC
rpc.startDiscordRPC(displayDetail, displayState);
// END: START DISCORD RPC
