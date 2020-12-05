// START: IMPORTS
const READLINE = require('readline');
const ASK = READLINE.createInterface({
  input:process.stdin,
  output: process.stdout
});
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
    let displayDetail = "";
    let isDefaultDetail = true;

    ASK.question("\nWould you like to choose your own detail? (Y/n): ", (answer) => {
      console.log(answer);
      this.answer = answer;
      let isDefaultDetail = answer.toLowerCase() == 'y' ?  true : false;
      console.log(isDefaultDetail);
      return isDefaultDetail;
    })

    // qSetOwnDetail = input('\nWould you like to choose your own detail? (Y/n): ')
    // isDefaultDetail = False if qSetOwnDetail.lower() == 'y' else True;

    // // IF: DEFAULT DETAIL
    // if (isDefaultDetail){
    //     displayDetail = details[0]
    // }  
    // // END: DEFAULT DETAIL

    // // # IF: CHOOSE OWN DETAIL
    // else{
    //     qUsePresetDetails = input(
    //         '> Use Preset Details? (Y/n): ')
    //     isUsePresetDetails = True if qUsePresetDetails.lower() == 'y' else False
    //     // # START: USE PRESET DETAIL
    //     if (isUsePresetDetails){
    //       listDetails(details)
    //       getWhichDetail = input(
    //             ':: Enter the number of your chosen detail?: ')
    //       displayDetail = details[int(getWhichDetail)-1]
    //     }
    //     // # END: USE PRESET DETAIL

    //     // # START: TYPE OWN DETAIL
    //     else{
    //       qWhatDetail = input(':: Enter Detail: ')
    //       displayDetail = qWhatDetail
    //     }
    //     // # END: TYPE OWN DETAIL
    // }
    // // # END: CHOOSE OWN DETAIL
    // // # END: CONDITIONAL SETTING DETAIL LOGIC
    // console.log('::👌 Ayt Got It!!!');
    // console.log("\n- - - - - - - - - -");
    // return displayDetail;
  }
  // End: Set Activity Detail
// END: FUNCTIONS

// START: EXPORTS
module.exports = {setDetail,listDetails};
// END: EXPORTS