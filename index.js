// START: IMPORTS
const layout = require('./layout');
const detail = require('./activityDetail');
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
layout.run(displayDetail, 'Hello World');

