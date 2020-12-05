// START: IMPORTS
const ASK = require('readline-sync');
// END: IMPORTS

// START: FUNCTIONS
  // Start: List Preset States
  function listStates(states){
    console.log("\n- - - - - - - - - -")
    console.log("List of States:: ")
    
    this.states = states;
    let order = 0
    states.forEach(eachState => {
      order++;
      console.log(order.toString() + ' - ' + eachState);
    });

    console.log("- - - - - - - - - -")
  }
  // End: List Preset States

  // Start: Set Activity State
  function setState(states){
    let displayState = '';
    let isDefaultState = true;
    let isUsePresetStates = true;

    let qSetOwnState = ASK.question("\nWould you like to choose your own state? (Y/n): ");
    isDefaultState = qSetOwnState.toLowerCase() == 'y' ?  false : true;

    // IF: DEFAULT STATE
    if (isDefaultState){
        displayState = states[0];
    }  

    // ELSE: CHOOSE OWN STATE
    else{
      let qUsePresetStates = ASK.question('> Use Preset States? (Y/n): ');
      isUsePresetStates = qUsePresetStates.toLowerCase() == 'y' ?  true : false;

      // START: USE PRESET STATES
      if (isUsePresetStates){
        listStates(states);
        let qWhichState = ASK.question(':: Enter the number of your chosen state?: ')
        displayState = states[parseInt(qWhichState)-1]
      }
      // # END: USE PRESET STATES

      // # START: TYPE OWN STATE
      else{
        let qWhatState = ASK.question(':: Enter State: ');
        displayState = qWhatState;
      }
      // # END: TYPE OWN STATE
    }
    // # END: CHOOSE OWN STATE
    // # END: CONDITIONAL SETTING STATE LOGIC
    console.log('::👌 Ayt Got It!!!');
    console.log("\n- - - - - - - - - -");
    return(displayState);
  }
  // End: Set Activity State
// END: FUNCTIONS

// START: EXPORTS
module.exports = {setState};
// END: EXPORTS