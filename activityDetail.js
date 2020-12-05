// START: IMPORTS
// const READLINE = require('readline');
// END: IMPORTS

function setDetail(details){
  console.log('Set Activity Details');
}

function listDetails(details){
  this.details = details;
  console.log(details);
}

module.exports = {setDetail,listDetails};