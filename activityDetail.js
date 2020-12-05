// START: IMPORTS
const ASK = require('readline-sync');
// END: IMPORTS

// START: FUNCTIONS
  // Start: List Details
  function listDetails(details){
    console.log("\n- - - - - - - - - -")
    console.log("List of Details:: ")
    
    this.details = details;
    let order = 0
    details.forEach(each_detail => {
      order++;
      console.log(order.toString() + ' - ' + each_detail);
    });

    console.log("- - - - - - - - - -")
  }
  // End: List Details

  // Start: Set Activity Detail
  function setDetail(details){
    let displayDetail = '';
    let isDefaultDetail = true;
    let isUsePresetDetails = true;

    let qSetOwnDetail = ASK.question("\nWould you like to choose your own detail? (Y/n): ");
    isDefaultDetail = qSetOwnDetail.toLowerCase() == 'y' ?  false : true;

    // IF: DEFAULT DETAIL
    if (isDefaultDetail){
        displayDetail = details[0];
    }  

    // ELSE: CHOOSE OWN DETAIL
    else{
      let qUsePresetDetails = ASK.question('> Use Preset Details? (Y/n): ');
      isUsePresetDetails = qUsePresetDetails.toLowerCase() == 'y' ?  true : false;

      // START: USE PRESET DETAIL
      if (isUsePresetDetails){
        listDetails(details);
        let getWhichDetail = ASK.question(':: Enter the number of your chosen detail?: ')
        displayDetail = details[parseInt(getWhichDetail)-1]
      }
      // # END: USE PRESET DETAIL

      // # START: TYPE OWN DETAIL
      else{
        let qWhatDetail = ASK.question(':: Enter Detail: ');
        displayDetail = qWhatDetail;
      }
      // # END: TYPE OWN DETAIL
    }
    // # END: CHOOSE OWN DETAIL
    // # END: CONDITIONAL SETTING DETAIL LOGIC
    console.log('::👌 Ayt Got It!!!');
    console.log("\n- - - - - - - - - -");
    return(displayDetail);
  }
  // End: Set Activity Detail
// END: FUNCTIONS

// START: EXPORTS
module.exports = {setDetail,listDetails};
// END: EXPORTS